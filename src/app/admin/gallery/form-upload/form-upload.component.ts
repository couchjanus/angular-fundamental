import { Component, OnInit } from '@angular/core';

import {
  AngularFireStorage,
  AngularFireUploadTask
} from 'angularfire2/storage';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

import { Image } from '../../../models';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.scss']
})

export class FormUploadComponent implements OnInit {

  // Main task
  task: AngularFireUploadTask;
  // Progress monitoring
  percentage: Observable<number>;
  snapshot: Observable<any>;
  // Download URL
  downloadURL: Observable<string>;
  // State for dropzone CSS toggling
  isHovering: boolean;
  imgPath: string;
  private imagesCollection: AngularFirestoreCollection<Image>;
  images: Observable<Image[]>;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
  ) {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  ngOnInit() {
    this.loadImages();
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }
    // The storage path
     this.imgPath = `pictures/${new Date().getTime()}_${file.name}`;

    // The main task
    this.task = this.storage.upload(this.imgPath, file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          // this.db.collection('photos').add({ size: snap.totalBytes });
        }
      }),
      finalize(
        () => {
          this.downloadURL = this.storage.ref(this.imgPath).getDownloadURL();
          this.downloadURL.subscribe(data => {
            // to create an id for the document.
            const id = this.db.createId();
            // storing downloadURL as imageURL
            const imageURL = data;
            // storing image path in firestore
            const imagePath = this.imgPath;
            // Image name fetched from ngModel on 'imageNm' field
            // const imageName = this.imageNm;
            // To store timestamp of the image before being inserted in firestore
            const image: Image = { id, imagePath, imageURL, createdAt: new Date() };
            // image object inserted in image collection (AngularFirestoreCollection)
            this.imagesCollection.doc(id).set(image);
            // setting the image name back to blank
         });
        })
    );
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
  loadImages() {
    this.imagesCollection = this.db.collection<Image>('photos');
    this.images = this.imagesCollection.valueChanges();
  }
}


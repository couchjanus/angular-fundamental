import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Image } from '../../models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  private imagesCollection: AngularFirestoreCollection<Image>;
  images: Observable<Image[]>;

  constructor(private afs: AngularFirestore) { }


  loadImages() {
    this.imagesCollection = this.afs.collection<Image>('photos');
    this.images = this.imagesCollection.valueChanges();
  }

  ngOnInit() {
    this.loadImages();
  }
}

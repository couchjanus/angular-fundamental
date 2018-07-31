import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyCategoryComponent } from './destroy-category.component';

describe('DestroyCategoryComponent', () => {
  let component: DestroyCategoryComponent;
  let fixture: ComponentFixture<DestroyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestroyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestroyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

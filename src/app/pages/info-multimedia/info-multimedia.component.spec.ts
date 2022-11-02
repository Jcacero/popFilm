import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMultimediaComponent } from './info-multimedia.component';

describe('InfoMultimediaComponent', () => {
  let component: InfoMultimediaComponent;
  let fixture: ComponentFixture<InfoMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPeliculasComponent } from './info-peliculas.component';

describe('InfoPeliculasComponent', () => {
  let component: InfoPeliculasComponent;
  let fixture: ComponentFixture<InfoPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

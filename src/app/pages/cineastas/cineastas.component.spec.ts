import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineastasComponent } from './cineastas.component';

describe('CineastasComponent', () => {
  let component: CineastasComponent;
  let fixture: ComponentFixture<CineastasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CineastasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CineastasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

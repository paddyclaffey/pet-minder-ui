import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAnimationComponent } from './animal-animation.component';

describe('AnimalComponent', () => {
  let component: AnimalAnimationComponent;
  let fixture: ComponentFixture<AnimalAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

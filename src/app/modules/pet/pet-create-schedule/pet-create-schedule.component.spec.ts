import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetCreatesSheduleComponent } from './pet-create-schedule.component';


describe('PetCreatesSheduleComponent', () => {
  let component: PetCreatesSheduleComponent;
  let fixture: ComponentFixture<PetCreatesSheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetCreatesSheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetCreatesSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

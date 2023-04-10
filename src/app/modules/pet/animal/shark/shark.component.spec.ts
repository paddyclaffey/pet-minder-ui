import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharkComponent } from './shark.component';

describe('SharkComponent', () => {
  let component: SharkComponent;
  let fixture: ComponentFixture<SharkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

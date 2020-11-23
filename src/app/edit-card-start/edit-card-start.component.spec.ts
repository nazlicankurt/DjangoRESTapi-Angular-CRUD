import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCardStartComponent } from './edit-card-start.component';

describe('EditCardStartComponent', () => {
  let component: EditCardStartComponent;
  let fixture: ComponentFixture<EditCardStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCardStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCardStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

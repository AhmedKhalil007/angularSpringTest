import { ComponentFixture, TestBed } from '@angular/core/testing';

import { updatePersonneComponent } from './update-personne.component';

describe('UpdatePersonneComponent', () => {
  let component: updatePersonneComponent;
  let fixture: ComponentFixture<updatePersonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [updatePersonneComponent]
    });
    fixture = TestBed.createComponent(updatePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

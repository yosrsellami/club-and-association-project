import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubinterfaceComponent } from './clubinterface.component';

describe('ClubinterfaceComponent', () => {
  let component: ClubinterfaceComponent;
  let fixture: ComponentFixture<ClubinterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubinterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

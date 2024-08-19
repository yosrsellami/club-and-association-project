import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAComponent } from './demande-a.component';

describe('DemandeAComponent', () => {
  let component: DemandeAComponent;
  let fixture: ComponentFixture<DemandeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemandeAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

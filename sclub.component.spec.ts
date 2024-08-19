import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SclubComponent } from './sclub.component';

describe('SclubComponent', () => {
  let component: SclubComponent;
  let fixture: ComponentFixture<SclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SclubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

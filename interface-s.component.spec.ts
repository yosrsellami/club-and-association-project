import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceSComponent } from './interface-s.component';

describe('InterfaceSComponent', () => {
  let component: InterfaceSComponent;
  let fixture: ComponentFixture<InterfaceSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterfaceSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfaceSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacemComponent } from './interfacem.component';

describe('InterfacemComponent', () => {
  let component: InterfacemComponent;
  let fixture: ComponentFixture<InterfacemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterfacemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfacemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

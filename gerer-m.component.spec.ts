import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererMComponent } from './gerer-m.component';

describe('GererMComponent', () => {
  let component: GererMComponent;
  let fixture: ComponentFixture<GererMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GererMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GererMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

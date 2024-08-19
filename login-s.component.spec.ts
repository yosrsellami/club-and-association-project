import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSComponent } from './login-s.component';

describe('LoginSComponent', () => {
  let component: LoginSComponent;
  let fixture: ComponentFixture<LoginSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

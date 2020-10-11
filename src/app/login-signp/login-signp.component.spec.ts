import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignpComponent } from './login-signp.component';

describe('LoginSignpComponent', () => {
  let component: LoginSignpComponent;
  let fixture: ComponentFixture<LoginSignpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSignpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPaymentPage } from './register-payment.page';

describe('RegisterPaymentPage', () => {
  let component: RegisterPaymentPage;
  let fixture: ComponentFixture<RegisterPaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
})
export class RecoveryPasswordComponent {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      documentNumber: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
    });
  }

  isFieldInvalid(fieldName: string, errorType: string) {
    const field = this.loginForm.get(fieldName);
    return (
      field.invalid &&
      (field.dirty || field.touched) &&
      field.hasError(errorType)
    );
  }

  recoveryPassword() {
    this.loginService.recoveryPassword(this.loginForm.value);
  }

  onSubmit() {
    this.loginService.recoveryPassword(this.loginForm.value);
  }
}

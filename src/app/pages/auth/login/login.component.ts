import { LoginService } from './../../../services/login.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      documentNumber: ['', Validators.required],
      password: ['', Validators.required],
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

  onSubmit() {
    this.loginService.signin(this.loginForm.value);
  }
}

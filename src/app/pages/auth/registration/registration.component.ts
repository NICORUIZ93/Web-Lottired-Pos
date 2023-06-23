import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  myForm: FormGroup;
  showPassword = true;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        agreeToTerms: [false, Validators.requiredTrue],
      },
      {validator: this.passwordMatchValidator}
    );
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }

  isFieldInvalid(fieldName: string, errorType: string) {
    const field = this.myForm.get(fieldName);
    return (
      field.invalid &&
      (field.dirty || field.touched) &&
      field.hasError(errorType)
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password').value;
    const confirmPassword = form.get('confirmPassword').value;
    if (password !== confirmPassword) {
      form.get('confirmPassword').setErrors({passwordMismatch: true});
    } else {
      form.get('confirmPassword').setErrors(null);
    }
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}

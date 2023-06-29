import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  myForm: FormGroup;
  showPassword = true;

  constructor(private fb: FormBuilder, private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getAll().subscribe((data) => {
      console.log(data);
    });

    this.myForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        agreeToTerms: [false, Validators.requiredTrue],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  submitForm() {
    if (this.myForm.valid) {
      this.myForm.addControl('dateRegister', new FormControl(new Date()));
      this.usersService.registerUser(this.myForm.value).subscribe((data) => {
        console.log('data', data);
      });
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
      form.get('confirmPassword').setErrors({ passwordMismatch: true });
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

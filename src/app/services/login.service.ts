import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { ToastService } from './toast.service';
import { ChangePassword } from 'src/interfaces/auth';
import { Status } from 'src/models/status';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.url;
  user = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastService: ToastService
  ) {}

  signin(data: any) {
    this.user = data;
    this.http.post(this.url + '/auth/login', this.user).subscribe({
      next: (value: any) => {
        localStorage.setItem('auth_token', value.token);
        localStorage.setItem('user', JSON.stringify(value.user));
      },
      error: (err) => {
        this.toastService.showToast(
          err.name,
          'El Usuario o la contraseña son incorrectos',
          Status.danger
        );
      },
      complete: () => {
        this.router.navigate(['/home']);
      },
    });
  }

  signup(data: any): Observable<any> {
    return this.http.post(this.url + '/auth/register', data);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getToken(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/auth/login', this.user).subscribe(
        (data: any) => {
          localStorage.setItem('auth_token', data.token);
          resolve(data.token ? true : false);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  recoveryPassword(data: ChangePassword) {
    this.http.post(this.url + '/auth/recovery-password', data).subscribe({
      next: (value: any) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err.error.message);
      },
      complete: () => {
        console.log('Contraseña cambiada correctamente');
        this.router.navigate(['/login/signin']);
      },
    });
  }
}

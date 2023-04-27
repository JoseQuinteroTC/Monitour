import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AdminObservableService } from 'src/app/services/observables/admin.observable.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../utils/validaciones.css']
})
export class LoginComponent {

  constructor(
    private adminObservables: AdminObservableService,
    private authService: AuthService,
    private router: Router
  ){}

  userEmail: string = '';
  userPassword: string = '';

  submitted: boolean = false;
  loading: boolean = false;
  invalidUser: boolean = false;

  login() {
    this.submitted = true;
    this.invalidUser = false;
    if(!this.userEmail || !this.userPassword){
      return;
    }

    this.loading = true;
    const form = new FormData();
    form.append('email', this.userEmail);
    form.append('password', this.userPassword);

    this.authService.userLogin(form).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.loading = false;
        const token = resp.access_token;
        if (token) {
          localStorage.setItem('token', token);
          const user = resp.user;
          this.adminObservables.setCurrentUser(user);
          this.router.navigate(['']);
        }
      },
      error: (error) => {
        this.loading = false;
        this.invalidUser = true;
        console.log(error);
      }
    });
  }
}

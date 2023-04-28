import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../utils/validaciones.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ){ }

  submitted: boolean = false;
  loading: boolean = false;
  registerForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  register() {
    this.submitted = true;
    this.registerForm.markAllAsTouched();
    this.equalPasswords();

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    let body = new FormData();
    body.append('name', this.registerForm.get('name')?.value);
    body.append('lastName', this.registerForm.get('lastName')?.value);
    body.append('email', this.registerForm.get('email')?.value);
    body.append('password', this.registerForm.get('password')?.value);

    this.authService.userRegister(body).subscribe({
      next: (resp: any) => {
        this.loading = false;
        console.log(resp);
        const token = resp.access_token;
        if (token) {
          this.authService.setToken(token);
          this.router.navigate(['login']);
        }
      },
      error: (e) => {
        this.loading = false;
        this.registerForm.controls['correo']?.setErrors({emailTaken: true});
        console.log(e);
      }
    });
  }

  validateField(field: string) {
    return this.submitted && this.registerForm.get(field)?.invalid
    && (this.registerForm.get(field)?.dirty || this.registerForm.get(field)?.touched);
  }

  equalPasswords() {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      this.registerForm.get('confirmPassword')?.setErrors({ notEqual: true });
    }
  }
}

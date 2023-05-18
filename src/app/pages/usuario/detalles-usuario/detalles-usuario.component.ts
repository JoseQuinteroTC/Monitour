import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.css', '../../../utils/validaciones.css']
})
export class DetallesUsuarioComponent {
  user: UsuarioModel;
  deleteCheck: boolean = false;

  // Loaders
  changingPassword: boolean = false;
  updatingUser: boolean = false;
  deleting: boolean = false;

  //Message booleans
  passwordChanged: boolean = false;
  userUpdated: boolean = false;

  userFormGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    description: [''],
    phone_number: ['']
  });

  passwordFormGroup: FormGroup = this.fb.group({
    password: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getUserByToken().subscribe(
      (resp) => {
        console.log(resp);
        this.user = resp;
        this.setUserData();
      }
    )
  }

  setUserData() {
    if (!this.user) {
      return;
    }
    this.userFormGroup.controls['name'].setValue(this.user.name);
    this.userFormGroup.controls['lastName'].setValue(this.user.lastName);
    this.userFormGroup.controls['email'].setValue(this.user.email);
    if (this.user?.document) {
      this.userFormGroup.controls['description'].setValue(this.user.description);
      this.userFormGroup.controls['phone_number'].setValue(this.user.phone_number);
    }
  }

  updateUser() {
    if (!this.user?.id || this.userFormGroup.invalid) {
      return;
    }
    this.updatingUser = true;
    let form: FormData = new FormData();
    form.append('id', this.user.id.toString());
    form.append('name', this.userFormGroup.get('name')?.value);
    form.append('lastName', this.userFormGroup.get('lastName')?.value);
    form.append('email', this.userFormGroup.get('email')?.value);
    if (this.user?.document) {
      form.append('description', this.userFormGroup.get('description')?.value);
      form.append('phone_number', this.userFormGroup.get('phone_number')?.value);
    }
    firstValueFrom(this.authService.updateUser(form)).then(
    () => {
      this.updatingUser = false;
      this.userUpdated = true;
      setTimeout(() => {
        this.userUpdated = false;
        window.location.reload();
      }, 2000);
    }).catch(
      (e) => {
        console.log(e);
        this.userFormGroup.controls['email']?.setErrors({emailTaken: true});
        this.updatingUser = false;
      }
    );
  }

  changePassword() {
    this.equalPasswords();
    if (this.passwordFormGroup.invalid) {
      return;
    }

    this.changingPassword = true;
    const form: FormData = new FormData();
    form.append('id', this.user.id.toString());
    form.append('password', this.passwordFormGroup.get('password')?.value);
    form.append('newPassword', this.passwordFormGroup.get('newPassword')?.value);

    this.authService.changePassword(form).subscribe({
      next: () => {
        this.changingPassword = false;
        this.passwordFormGroup.reset();
        this.passwordChanged = true;
        setTimeout(() => {
          this.passwordChanged = false;
        }, 2000);
      },
      error: (e) => {
        console.log(e);
        this.changingPassword = false;
        this.passwordFormGroup.controls['password']?.setErrors({invalidClave: true});
      }
    });
  }

  equalPasswords() {
    const password = this.passwordFormGroup.get('newPassword')?.value;
    const confirmPassword = this.passwordFormGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      this.passwordFormGroup.get('confirmPassword')?.setErrors({ notEqual: true });
    }
  }

  deleteUser() {
    this.deleting = true;
    firstValueFrom(this.authService.deleteUser(this.user.id)).then(
      (resp) => {
        console.log(resp);
        this.authService.deleteToken();
        this.router.navigate(['']);
      }
    );
  }
}

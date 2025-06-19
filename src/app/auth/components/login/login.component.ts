import { Component } from '@angular/core';
import { AngularComponentModule } from '../../../AngularComponentModule';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-login',
  imports: [AngularComponentModule],
  standalone: true,
  templateUrl: './login.component.html',
  // styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  hidePassword = true;
  constructor(private fb: FormBuilder,private router:Router,private authService:AuthService,private snackbar:MatSnackBar) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    console.log(this.loginForm.value);

    this.authService.login(this.loginForm.value).subscribe((res)=>{
      console.log(res)
      if(res.userId!=null){
        const user={
          id:res.userId,
          role:res.userRole
        }
       
        StorageService.saveUser(user)
        StorageService.saveToken(res.jwt)
        if(StorageService.isAdminLoggedIn()){
          this.router.navigateByUrl("/admin/dashboard")
        }else if(StorageService.isEmployeeLoggedIn()){
          this.router.navigateByUrl("/employee/dashboard")
        }
        this.snackbar.open("Login Successfully","Close",{duration:5000});
      }else{
        this.snackbar.open("Login Failed","Close",{duration:5000,panelClass:"error-snackbar"})
      }
    })
  }
}

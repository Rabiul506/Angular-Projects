import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LogRegService } from '../../service/log-reg.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgIf,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoginView: boolean = false;

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private logReg: LogRegService
  )
  {

  // Login Form start 

  this.loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),

  })
  // Login Form end 
  }

    navigateToLogin() {
      this.router.navigate(['/signUP']);
    }


  onSubmit(){

    console.log(this.loginForm.value);
    
    const loginData = this.loginForm.value;
    const storedUserData = this.logReg.getUser();

    if (storedUserData && storedUserData.email === loginData.email && 
      storedUserData.password === loginData.password) {
      alert('Login successful!');
      // Redirect to dashboard or other page
      this.router.navigate(['/home']); // Example page
      console.log('login successfully');
      
    } else {
      alert('Invalid credentials');
      console.log('invalid login');

    }
  }
}

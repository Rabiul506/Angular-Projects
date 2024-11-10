import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogRegService } from '../../service/log-reg.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink,],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  regForm: FormGroup;

  constructor(
    private router: Router,
    private logReg: LogRegService,
  ) {
    this.regForm = new FormGroup({
      email: new FormControl('', Validators.email),
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.minLength(8)),
    
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    // if (this.regForm.valid) {
    //   console.log(this.regForm.value);
    // }

    if (this.regForm.valid) {
      const userData = {
        email: this.regForm.value.email,
        name: this.regForm.value.user,
        password: this.regForm.value.password
      };
  
      // Save user data using UserService
      this.logReg.saveUser(userData);
      alert('Signup successful!');
      this.router.navigate(['/login']);
      console.log('signUp sucessfull !!')
      console.log(this.regForm.value);
      
      }else{
        console.log('invalid registration');
        
      }
  }
}

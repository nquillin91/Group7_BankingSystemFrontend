import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { UserAuthService } from '../../_services/user.auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  myForm: FormGroup;
error = false;
errorMessage = '';

  Roles: any = ['Admin', 'Banker', 'Employee'];

  constructor(private fb: FormBuilder, public userauthService: UserAuthService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.compose([
      Validators.required,
      this.isEmail
      ])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([
      Validators.required,
      this.isEqualPassword.bind(this)
      ])],
      });
    
  }

  SignUp(){
    alert("user info stored in firebase")
   
      this.userauthService.signup(this.email, this.password);
      this.email = this.password = '';
    
    
  }
  isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    return {noEmail: true};
    }
    }

    isEqualPassword(control: FormControl): {[s: string]: boolean} {
      if (!this.myForm) {
      return {passwordsNotMatch: true};
      }
      if (control.value !== this.myForm.controls['password'].value) {
      return {passwordsNotMatch: true};
      }
  }
  login() {
    this.userauthService.login(this.email, this.password);
    this.email = this.password = '';    
    alert("login successful")
  }
  

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthenticationService } from '../../_services/authentication.service';

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

  constructor(private fb: FormBuilder, public authenticationService: AuthenticationService) { }

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
    //this.authenticationService.signup(RegistrationForm);
    //this.email = this.password = '';
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
}
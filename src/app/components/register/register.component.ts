import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { UserAuthService } from '../../_services/user.auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
error = false;
errorMessage = '';

  Roles: any = ['Admin', 'Banker', 'Employee'];

  constructor(private fb: FormBuilder, private userauthService: UserAuthService) { }

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
    this.userauthService.signupUser(this.myForm.value);
    
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

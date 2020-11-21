import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthenticationService } from '../../_services/authentication.service';
import { UserProfile } from '../../models/user-profile/user-profile';
import {RegistrationForm} from '../../models/registration-form'
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';
import { observable } from 'rxjs';

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
  userProfile: UserProfile;
  registerForm: RegistrationForm;
    birthDate: FormControl;
    existingPassword: string;
    newPassword: string;
    RegtempForm:FormGroup;

  Roles: any = ['Admin', 'Banker', 'Employee'];

  constructor(private fb: FormBuilder, public authenticationService: AuthenticationService, private userService: UserService, private router: Router) {
    this.userProfile = new UserProfile();
    this.registerForm = new RegistrationForm();
    this.birthDate = new FormControl(new Date(this.userProfile.birthDate));

    this.RegtempForm = this.fb.group({
      'username': [''],
      'password': ['']
    });
}

  // ngOnInit() {
  //   this.myForm = this.fb.group({
  //     email: ['', Validators.compose([
  //     Validators.required,
  //     this.isEmail
  //     ])],
  //     password: ['', Validators.required],
  //     confirmPassword: ['', Validators.compose([
  //     Validators.required,
  //     this.isEqualPassword.bind(this)
  //     ])],
  //     });
  // }

  
  ngOnInit() {
}

  SignUp(un,p,f,m,l,ea,ph,ssn,a1,a2,c,s,z){
    
    //alert(this.RegtempForm.value['username']);
    var jsonval={
      "username" : un,
      "password" : p,
      "firstName" : f,
      "middleName" : m,
      "lastName" : l,
        "birthDate" : "02/05/1995",
        "providedIncome" : 78000,
      "phoneNumber" : ph,
      "emailAddress" : ea,
      "ssn" : ssn,
      "addressLine1" : a1,
      "addressLine2" : a2,
      "city" : c,
      "state" : s,
      "zipcode" : z
      
    };
    console.log("Test")
    
     this.authenticationService.signup(jsonval).subscribe(
       res => {
        alert("Account created Successfully for User "+un+", Please Login");
         this.router.navigateByUrl('/login');
       },
       error => {
         alert("Error on creation on user")
       }
     );
    //this.authenticationService.signup(RegistrationForm);
    //this.email = this.password = '';
  }

  isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return {noEmail: true};
    }
  }

  onLogout() {
    alert("LogOut Called");
    this.authenticationService.logout();
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
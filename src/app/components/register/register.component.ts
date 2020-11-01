import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthenticationService } from '../../_services/authentication.service';
import { UserProfile } from '../../models/userprofile';
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
    birthDate: FormControl;
    existingPassword: string;
    newPassword: string;

  Roles: any = ['Admin', 'Banker', 'Employee'];

  constructor(private fb: FormBuilder, public authenticationService: AuthenticationService, private userService: UserService, private router: Router) {
    this.userProfile = new UserProfile();
    this.birthDate = new FormControl(new Date(this.userProfile.birthDate));
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

    var jsonval={
      "username" : "testuser",
      "password" : "testPass",
      "firstName" : "Nicholas",
      "middleName" : "Ryan",
      "lastName" : "Quillin",
        "birthDate" : "02/05/1995",
        "providedIncome" : 78000,
      "phoneNumber" : "708-525-1444",
      "emailAddress" : "nquillin91@gmail.com",
      "ssn" : "123-12-1234",
      "addressLine1" : "123 Test Avenue",
      "addressLine2" : "1",
      "city" : "Chicago",
      "state" : "IL",
      "zipcode" : "60602"
    };

    this.SignUp(jsonval);
}

  SignUp(val){
    console.log("Test")
    alert("user info stored in firebase");
    this.authenticationService.signup(val).subscribe(
      res => {
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
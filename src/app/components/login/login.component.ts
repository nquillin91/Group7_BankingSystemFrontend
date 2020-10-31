import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationServiceV2 } from '../../_services/authentication.service_v2';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  loginForm:FormGroup;

  constructor(
    public authenticationService: AuthenticationServiceV2,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router  
  ) {
    this.loginForm = this.formBuilder.group({
      'username': ['', [Validators.required, this.isEmail]],
      'password': ['', [Validators.required]]
    });
  }

  ngOnInit(): void {  
  }

  isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return {
        noEmail: true
      };
    }
  }

  login():void {
    this.authenticationService.login(this.loginForm.value).subscribe(
      res => {
        this.authenticationService.setLoggedUser(res.responseObject);
        this.router.navigateByUrl('/home');
      },
      error => {
        //this.internalServerError = true;
      }
    );
  }
 
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserAuthService } from '../../_services/user.auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
error = false;
errorMessage = '';
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  email: string;
  password: string;

  constructor(
    public userauthService: UserAuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router  
  ) { }

  ngOnInit(): void { 
     
  }
  
  async onSubmit(value: string,value1: string) {
    // alert(value);
    // alert(value1);
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    //if (this.form.valid) {
      try {
        this.userauthService.login(value, value1);
      } catch (err) {
        this.loginInvalid = true;
        alert("invalid login")
      }
    
  }

  isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    return {noEmail: true};
    }
    }
 
}

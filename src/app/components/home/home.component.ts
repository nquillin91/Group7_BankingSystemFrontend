import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  isAuth() {
  }
  
  ngOnInit(): void {
  }

  onLogout() {
    alert("LogOut Called");
    this.authenticationService.logout();
  }
}

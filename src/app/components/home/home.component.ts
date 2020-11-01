import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: String;

  constructor(private authenticationService:AuthenticationService) { }

  isAuth() {
  }
  
  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      this.username = this.authenticationService.getLoggedInUser();
    }
  }

  onLogout() {
    alert("LogOut Called");
    this.authenticationService.logout();
  }
}

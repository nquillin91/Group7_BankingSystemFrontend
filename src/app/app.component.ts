import { Component } from '@angular/core';
import { AuthenticationService } from '../app/_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankingSystem';

  constructor(private authenticationService:AuthenticationService) { }

  onLogout() {
    alert("LogOut Called");
    this.authenticationService.logout();
  }
}

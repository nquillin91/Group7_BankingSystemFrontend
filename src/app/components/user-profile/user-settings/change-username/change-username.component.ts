import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../../_services/authentication.service';
import { UserService } from '../../../../_services/user.service';
import { Username } from '../../../../models/user-profile/username';

@Component({
    selector: 'app-change-username',
    styleUrls: ['change-username.component.scss'],
    templateUrl: 'change-username.component.html'
})
export class ChangeUsernameComponent implements OnInit {

    currentUsername: string;
    newUsername: string;
    wasRequestSent: boolean;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.currentUsername = JSON.parse(sessionStorage.getItem('userProfile')).username;
        this.wasRequestSent = false;
    }

    ngOnInit() {
    }

    changeUsername():void {
        let usernameDto = new Username(this.newUsername);
        this.userService.changeUsername(usernameDto).subscribe(
            () => this.wasRequestSent = true
        );
    }

    back():void {
        this.router.navigate(['/user-settings'], { skipLocationChange: true });
    }

    onLogout():void {
        this.authenticationService.logout();
    }
}
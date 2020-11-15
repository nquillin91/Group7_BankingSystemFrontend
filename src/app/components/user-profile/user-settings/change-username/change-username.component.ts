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
    
    requestCompleted: boolean;
    requestFailed: boolean;
    responseMessage: string;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.currentUsername = JSON.parse(sessionStorage.getItem('userProfile')).username;
        
        this.requestCompleted = false;
        this.requestFailed = false;
    }

    ngOnInit() {
    }

    changeUsername():void {
        let usernameDto = new Username(this.newUsername);
        this.userService.changeUsername(usernameDto).subscribe(
            x => {
                let userProfile = JSON.parse(sessionStorage.getItem('userProfile'));

                userProfile.username = this.newUsername;

                sessionStorage.setItem('userProfile', JSON.stringify(userProfile));

                this.requestCompleted = true;
            },
            resp => {
                this.requestFailed = true;
                this.responseMessage = resp.error.message;
            }
        );
    }

    back():void {
        this.router.navigate(['/user-settings'], { skipLocationChange: true });
    }

    onLogout():void {
        this.authenticationService.logout();
    }
}
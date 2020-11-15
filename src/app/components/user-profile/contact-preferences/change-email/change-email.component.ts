import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../../_services/authentication.service';
import { UserService } from '../../../../_services/user.service';
import { EmailAddress } from '../../../../models/user-profile/email-address';

@Component({
    selector: 'app-change-email',
    styleUrls: ['change-email.component.scss'],
    templateUrl: 'change-email.component.html'
})
export class ChangeEmailComponent implements OnInit {

    currentEmail: string;
    newEmail: string;
    
    requestCompleted: boolean;
    requestFailed: boolean;
    responseMessage: string;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.currentEmail = JSON.parse(sessionStorage.getItem('userProfile')).emailAddress;
        
        this.requestCompleted = false;
        this.requestFailed = false;
    }

    ngOnInit() {
    }

    changeEmail():void {
        let emailAddressDto = new EmailAddress(this.newEmail);
        this.userService.changeEmailAddress(emailAddressDto).subscribe(
            x => {
                let userProfile = JSON.parse(sessionStorage.getItem('userProfile'));

                userProfile.emailAddress = this.newEmail;

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
        this.router.navigate(['/contact-prefs'], { skipLocationChange: true });
    }

    onLogout():void {
        this.authenticationService.logout();
    }
}
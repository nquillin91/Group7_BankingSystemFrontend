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
    wasRequestSent: boolean;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.currentEmail = JSON.parse(sessionStorage.getItem('userProfile')).emailAddress;
        this.wasRequestSent = false;
    }

    ngOnInit() {
    }

    changeEmail():void {
        let emailAddressDto = new EmailAddress(this.newEmail);
        this.userService.changeEmailAddress(emailAddressDto).subscribe(
            () => this.wasRequestSent = true
        );
    }

    back():void {
        this.router.navigate(['/contact-prefs'], { skipLocationChange: true });
    }

    onLogout():void {
        this.authenticationService.logout();
    }
}
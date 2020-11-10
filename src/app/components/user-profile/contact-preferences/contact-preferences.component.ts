import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';
import { UserService } from '../../../_services/user.service';
import { UserProfile } from '../../../models/user-profile/user-profile';

@Component({
    selector: 'app-contact-preferences',
    styleUrls: ['contact-preferences.component.scss'],
    templateUrl: 'contact-preferences.component.html'
})
export class ContactPreferencesComponent implements OnInit {
    userProfile: UserProfile;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.userProfile = JSON.parse(sessionStorage.getItem('userProfile'));
    }

    ngOnInit() {
    }

    navigateToChangeAddress():void {
        this.router.navigate(['/change-address'], { skipLocationChange: true });
    }

    navigateToChangeEmailAddress():void {
        this.router.navigate(['/change-email'], { skipLocationChange: true });
    }

    navigateToChangePhoneNumber():void {
        this.router.navigate(['/change-phone'], { skipLocationChange: true });
    }

    back():void {
        this.router.navigate(['/user-profile'], { skipLocationChange: true });
    }

    onLogout():void {
        this.authenticationService.logout();
    }
}
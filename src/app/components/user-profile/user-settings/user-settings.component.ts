import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';
import { UserService } from '../../../_services/user.service';
import { UserProfile } from '../../../models/user-profile/user-profile';

@Component({
    selector: 'app-user-settings',
    styleUrls: ['user-settings.component.scss'],
    templateUrl: 'user-settings.component.html'
})
export class UserSettingsComponent implements OnInit {
    userProfile: UserProfile;
    
    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.userProfile = JSON.parse(sessionStorage.getItem('userProfile'));
    }

    ngOnInit() {
    }

    navigateToChangeUsername():void {
        this.router.navigate(['/change-username'], { skipLocationChange: true });
    }

    navigateToChangePassword():void {
        this.router.navigate(['/change-password'], { skipLocationChange: true });
    }

    navigateToChangeIncome():void {
        this.router.navigate(['/change-income'], { skipLocationChange: true });
    }

    back():void {
        this.router.navigate(['/user-profile'], { skipLocationChange: true });
    }

    onLogout():void {
        this.authenticationService.logout();
    }
}
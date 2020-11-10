import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import { UserProfile } from '../../models/user-profile/user-profile';
import { UserService } from '../../_services/user.service';

@Component({
    selector: 'app-user-profile',
    styleUrls: ['user-profile.component.scss'],
    templateUrl: 'user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

    profileImage: any = '../../../assets/images/person_edit.png';
    userProfile: UserProfile;
    birthDate: FormControl;
    existingPassword: string;
    newPassword: string;

    constructor(private authenticationService: AuthenticationService, private userService: UserService, private router: Router) {
        this.userProfile = new UserProfile();
        this.birthDate = new FormControl(new Date(this.userProfile.birthDate));
    }

    ngOnInit() {
        if (sessionStorage.getItem('userProfile') === null) {
            try {    
                this.userService.getUserProfile().subscribe((data: UserProfile) => {
                    this.userProfile = data;
                    this.birthDate = new FormControl(new Date(this.userProfile.birthDate.replace(/-/g, '\/').replace(/T.+/, '')));
                    sessionStorage.setItem('userProfile', JSON.stringify(this.userProfile));
                },
                error => console.log(error));
            } catch {}
        } else {
            this.userProfile = JSON.parse(sessionStorage.getItem('userProfile'));
            this.birthDate = new FormControl(new Date(this.userProfile.birthDate.replace(/-/g, '\/').replace(/T.+/, '')));
        }
    }

    navigateToContactPrefs():void {
        this.router.navigate(['/contact-prefs'], { skipLocationChange: true });
    }

    navigateToUserSettings():void {
        this.router.navigate(['/user-settings'], { skipLocationChange: true });
    }

    onLogout():void {
        this.authenticationService.logout();
    }
}
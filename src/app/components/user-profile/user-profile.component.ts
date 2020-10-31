import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import { UserProfile } from '../../models/userprofile';
import { UserService } from '../../_services/user.service';

@Component({
    selector: 'app-userprofile',
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
        try {
            this.userService.getUserProfile().subscribe((data: UserProfile) => {
                if (data) {
                    this.userProfile = data;
                } else {
                    this.userProfile = new UserProfile();
                }

                this.birthDate = new FormControl(new Date(this.userProfile.birthDate.replace(/-/g, '\/').replace(/T.+/, '')));
            },
            error => console.log(error));
        } catch {

        }
    }

    onLogout() {
        this.authenticationService.logout();
    }
}
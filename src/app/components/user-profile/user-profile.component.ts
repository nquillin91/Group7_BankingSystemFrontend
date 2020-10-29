import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {UserAuthService} from '../../_services/user.auth.service'
import {UserProfile} from '../../models/userprofile';
//import {UserProfileService} from '../../_services/userprofile.service';

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


    constructor(private userauthService: UserAuthService, private router: Router) {
    }

    ngOnInit() {
        //this.userProfile = this.userProfileService.getSavedProfile();
        this.userProfile = new UserProfile();
        this.birthDate = new FormControl(new Date(this.userProfile.birthDate));
    }

    onLogout() {
        alert("LogOut Called");
        this.userauthService.logout();
    }
}
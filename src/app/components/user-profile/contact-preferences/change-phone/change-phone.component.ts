import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../../_services/authentication.service';
import { UserService } from '../../../../_services/user.service';
import { PhoneNumber } from '../../../../models/user-profile/phone-number';

@Component({
    selector: 'app-change-phone',
    styleUrls: ['change-phone.component.scss'],
    templateUrl: 'change-phone.component.html'
})
export class ChangePhoneComponent implements OnInit {

    currentPhoneNumber: string;
    newPhoneNumber: string;
    
    requestCompleted: boolean;
    requestFailed: boolean;
    responseMessage: string;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.currentPhoneNumber = JSON.parse(sessionStorage.getItem('userProfile')).phoneNumber;
        
        this.requestCompleted = false;
        this.requestFailed = false;
    }

    ngOnInit() {
    }

    changePhoneNumber():void {
        let phoneNumberDto = new PhoneNumber(this.newPhoneNumber);
        this.userService.changePhoneNumber(phoneNumberDto).subscribe(
            x => {
                let userProfile = JSON.parse(sessionStorage.getItem('userProfile'));

                userProfile.phoneNumber = this.newPhoneNumber;

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
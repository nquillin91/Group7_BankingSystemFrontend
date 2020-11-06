import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../../_services/authentication.service';
import { UserService } from '../../../../_services/user.service';

@Component({
    selector: 'app-change-phone',
    styleUrls: ['change-phone.component.scss'],
    templateUrl: 'change-phone.component.html'
})
export class ChangePhoneComponent implements OnInit {

    currentPhoneNumber: string;
    newPhoneNumber: string;
    wasRequestSent: boolean;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.currentPhoneNumber = JSON.parse(sessionStorage.getItem('userProfile')).phoneNumber;
        this.wasRequestSent = false;
    }

    ngOnInit() {
    }

    changePhoneNumber():void {
        this.userService.changePhoneNumber(this.newPhoneNumber).subscribe(
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
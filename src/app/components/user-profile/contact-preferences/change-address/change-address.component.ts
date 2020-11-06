import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../../_services/authentication.service';
import { UserService } from '../../../../_services/user.service';

@Component({
    selector: 'app-change-address',
    styleUrls: ['change-address.component.scss'],
    templateUrl: 'change-address.component.html'
})
export class ChangeAddressComponent implements OnInit {

    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
    fullAddress: string;
    wasRequestSent: boolean;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.addressLine1 = JSON.parse(sessionStorage.getItem('userProfile')).addressLine1;
        this.addressLine2 = JSON.parse(sessionStorage.getItem('userProfile')).addressLine2;
        this.city = JSON.parse(sessionStorage.getItem('userProfile')).city;
        this.state = JSON.parse(sessionStorage.getItem('userProfile')).state;
        this.zipCode = JSON.parse(sessionStorage.getItem('userProfile')).zipCode;
        this.wasRequestSent = false;
    }

    ngOnInit() {
    }

    changeAddress():void {
        // Change this to a new model of type address
        this.userService.changeAddress(this.fullAddress).subscribe(
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
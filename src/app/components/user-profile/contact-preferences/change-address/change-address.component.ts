import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../../_services/authentication.service';
import { UserService } from '../../../../_services/user.service';
import { BillingAddress } from '../../../../models/user-profile/billing-address';

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
    zipcode: string;
    wasRequestSent: boolean;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.addressLine1 = JSON.parse(sessionStorage.getItem('userProfile')).addressLine1;
        this.addressLine2 = JSON.parse(sessionStorage.getItem('userProfile')).addressLine2;
        this.city = JSON.parse(sessionStorage.getItem('userProfile')).city;
        this.state = JSON.parse(sessionStorage.getItem('userProfile')).state;
        this.zipcode = JSON.parse(sessionStorage.getItem('userProfile')).zipcode;
        this.wasRequestSent = false;
    }

    ngOnInit() {
    }

    changeAddress():void {
        let billingAddressDto = new BillingAddress(this.addressLine1, this.addressLine2, this.city, this.state, this.zipcode);
        this.userService.changeAddress(billingAddressDto).subscribe(
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
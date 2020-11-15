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
    
    requestCompleted: boolean;
    requestFailed: boolean;
    responseMessage: string;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.addressLine1 = JSON.parse(sessionStorage.getItem('userProfile')).addressLine1;
        this.addressLine2 = JSON.parse(sessionStorage.getItem('userProfile')).addressLine2;
        this.city = JSON.parse(sessionStorage.getItem('userProfile')).city;
        this.state = JSON.parse(sessionStorage.getItem('userProfile')).state;
        this.zipcode = JSON.parse(sessionStorage.getItem('userProfile')).zipcode;
        
        this.requestCompleted = false;
        this.requestFailed = false;
    }

    ngOnInit() {
    }

    changeAddress():void {
        let billingAddressDto = new BillingAddress(this.addressLine1, this.addressLine2, this.city, this.state, this.zipcode);
        
        this.userService.changeAddress(billingAddressDto).subscribe(
            x => {
                let userProfile = JSON.parse(sessionStorage.getItem('userProfile'));

                userProfile.addressLine1 = this.addressLine1;
                userProfile.addressLine2 = this.addressLine2;
                userProfile.city = this.city;
                userProfile.state = this.state;
                userProfile.zipcode = this.zipcode;

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
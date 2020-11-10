import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../../_services/authentication.service';
import { UserService } from '../../../../_services/user.service';
import { Password } from '../../../../models/user-profile/password';

@Component({
    selector: 'app-change-password',
    styleUrls: ['change-password.component.scss'],
    templateUrl: 'change-password.component.html'
})
export class ChangePasswordComponent implements OnInit {

    existingPassword: string;
    newPassword: string;
    wasRequestSent: boolean;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.wasRequestSent = false;
    }

    ngOnInit() {
    }

    changePassword():void {
        let passwordDto = new Password(this.existingPassword, this.newPassword);
        this.userService.changePassword(passwordDto).subscribe(
            () => this.wasRequestSent = true
        );
    }

    back():void {
        this.router.navigate(['/user-settings'], { skipLocationChange: true });
    }

    onLogout():void {
        this.authenticationService.logout();
    }
}
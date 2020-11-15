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

    requestCompleted: boolean;
    requestFailed: boolean;
    responseMessage: string;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.requestCompleted = false;
        this.requestFailed = false;
    }

    ngOnInit() {
    }

    changePassword():void {
        let passwordDto = new Password(this.existingPassword, this.newPassword);
        
        this.userService.changePassword(passwordDto).subscribe(
            x => {
                this.requestCompleted = true;
            },
            resp => {
                this.requestFailed = true;
                this.responseMessage = resp.error.message;
            }
        );
    }

    back():void {
        this.router.navigate(['/user-settings'], { skipLocationChange: true });
    }

    onLogout():void {
        this.authenticationService.logout();
    }
}
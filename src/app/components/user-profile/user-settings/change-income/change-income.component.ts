import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../../_services/authentication.service';
import { UserService } from '../../../../_services/user.service';

@Component({
    selector: 'app-change-income',
    styleUrls: ['change-income.component.scss'],
    templateUrl: 'change-income.component.html'
})
export class ChangeIncomeComponent implements OnInit {

    providedIncome: number;
    wasRequestSent: boolean;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.providedIncome = JSON.parse(sessionStorage.getItem('userProfile')).providedIncome;
        this.wasRequestSent = false;
    }

    ngOnInit() {
    }

    changeIncome():void {
        this.userService.changeIncome(this.providedIncome).subscribe(
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
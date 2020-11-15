import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../../_services/authentication.service';
import { UserService } from '../../../../_services/user.service';
import { ProvidedIncome } from '../../../../models/user-profile/provided-income';

@Component({
    selector: 'app-change-income',
    styleUrls: ['change-income.component.scss'],
    templateUrl: 'change-income.component.html'
})
export class ChangeIncomeComponent implements OnInit {

    providedIncome: number;
    
    requestCompleted: boolean;
    requestFailed: boolean;
    responseMessage: string;

    constructor(private authenticationService: AuthenticationService, private userService: UserService,
            private route: ActivatedRoute, private router: Router) {
        this.providedIncome = JSON.parse(sessionStorage.getItem('userProfile')).providedIncome;
        
        this.requestCompleted = false;
        this.requestFailed = false;
    }

    ngOnInit() {
    }

    changeIncome():void {
        let providedIncomeDto = new ProvidedIncome(this.providedIncome);
        this.userService.changeIncome(providedIncomeDto).subscribe(
            x => {
                let userProfile = JSON.parse(sessionStorage.getItem('userProfile'));

                userProfile.providedIncome = this.providedIncome;

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
        this.router.navigate(['/user-settings'], { skipLocationChange: true });
    }

    onLogout():void {
        this.authenticationService.logout();
    }
}
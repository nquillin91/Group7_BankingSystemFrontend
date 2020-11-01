import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
//importing the components added in the routing module
import {HomeComponent} from '../app/components/home/home.component' 
import {LoginComponent} from '../app/components/login/login.component'
import {RegisterComponent} from '../app/components/register/register.component'
import {LoanAppComponent} from '../app/components/loan-app/loan-app.component'
import {TransferFundsComponent} from '../app/components/transfer-funds/transfer-funds.component'
import {UserProfileComponent} from '../app/components/user-profile/user-profile.component'
import {AccountComponent} from '../app/components/account/account.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'loan', component: LoanAppComponent},
  {path:'transferFunds',component:TransferFundsComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'account',component:AccountComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FlexLayoutModule],
  exports: [RouterModule],

})

export class AppRoutingModule { }

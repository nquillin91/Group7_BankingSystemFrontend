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
import {ContactPreferencesComponent} from '../app/components/user-profile/contact-preferences/contact-preferences.component'
import {ChangeAddressComponent} from '../app/components/user-profile/contact-preferences/change-address/change-address.component'
import {ChangeEmailComponent} from '../app/components/user-profile/contact-preferences/change-email/change-email.component'
import {ChangePhoneComponent} from '../app/components/user-profile/contact-preferences/change-phone/change-phone.component'
import {UserSettingsComponent} from '../app/components/user-profile/user-settings/user-settings.component'
import {ChangeIncomeComponent} from '../app/components/user-profile/user-settings/change-income/change-income.component'
import {ChangePasswordComponent} from '../app/components/user-profile/user-settings/change-password/change-password.component'
import {ChangeUsernameComponent} from '../app/components/user-profile/user-settings/change-username/change-username.component'
import {AccountComponent} from '../app/components/account/account.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'loan', component: LoanAppComponent},
  {path:'transferFunds',component:TransferFundsComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'contact-prefs', component:ContactPreferencesComponent},
  {path:'change-address', component:ChangeAddressComponent},
  {path:'change-email', component:ChangeEmailComponent},
  {path:'change-phone', component:ChangePhoneComponent},
  {path:'user-settings', component:UserSettingsComponent},
  {path:'change-income', component:ChangeIncomeComponent},
  {path:'change-password', component:ChangePasswordComponent},
  {path:'change-username', component:ChangeUsernameComponent},
  {path:'account',component:AccountComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FlexLayoutModule],
  exports: [RouterModule],

})

export class AppRoutingModule { }

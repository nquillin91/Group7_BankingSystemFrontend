import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { UserProfile } from '../models/user-profile/user-profile';
import { BillingAddress } from '../models/user-profile/billing-address';
import { EmailAddress } from '../models/user-profile/email-address';
import { PhoneNumber } from '../models/user-profile/phone-number';
import { ProvidedIncome } from '../models/user-profile/provided-income';
import { Password } from '../models/user-profile/password';
import { Username } from '../models/user-profile/username';
import { environment } from  '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  endpoint = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>(`/users`);
  }

  getById(id: number) {
      return this.http.get(`/users/` + id);
  }

  getUserProfile() {
    return this.http.get<UserProfile>(this.endpoint + '/users/user/profile');
  }

  changeAddress(billingAddressDto: BillingAddress) {
    return this.http.put(this.endpoint + `/users/user/billing-address`, billingAddressDto);
  }

  changeEmailAddress(emailAddressDto: EmailAddress) {
    return this.http.put(this.endpoint + `/users/user/email-address`, emailAddressDto);
  }

  changePhoneNumber(phoneNumberDto: PhoneNumber) {
    return this.http.put(this.endpoint + `/users/user/phone-number`, phoneNumberDto);
  }

  changeIncome(providedIncomeDto: ProvidedIncome) {
    return this.http.put(this.endpoint + `/users/user/income`, providedIncomeDto);
  }

  changeUsername(usernameDto: Username) {
    return this.http.put(this.endpoint + `/users/user/username`, usernameDto);
  }

  changePassword(passwordDto: Password) {
    return this.http.put(this.endpoint + `/users/user/password`, passwordDto);
  }

  delete(id: number) {
      return this.http.delete(this.endpoint + `/users/user`);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { UserProfile } from '../models/userprofile';
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
    // update to /users/user/profile
    return this.http.get<UserProfile>(this.endpoint + '/users/profile');
  }

  changeAddress(newAddress: string) {
    return this.http.put(`/users/user/income`, newAddress);
  }

  changeEmailAddress(newEmailAddress: string) {
    return this.http.put(`/users/user/income`, newEmailAddress);
  }

  changePhoneNumber(newPhoneNumber: string) {
    return this.http.put(`/users/user/phoneNumber`, newPhoneNumber);
  }

  changeIncome(newProvidedIncome: number) {
    return this.http.put(`/users/user/providedIncome`, newProvidedIncome);
  }

  changeUsername(username: string) {
    return this.http.put(`/users/user/username`, username);
  }

  changePassword(existingPassword: string, newPassword: string) {
    return this.http.put(`/users/user/password`, newPassword);
  }

  delete(id: number) {
      return this.http.delete(`/users/` + id);
  }
}
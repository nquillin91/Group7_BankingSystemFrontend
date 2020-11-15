import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from 'ngx-webstorage-service';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { RegistrationForm } from '../models/registration-form';
import { environment } from  '../../environments/environment';

const STORAGE_KEY = 'current-user';

export class JwtResponse{
    constructor(
        public jwtToken:string,) {}
}

@Injectable({
    providedIn: 'root'
})
@Injectable()
export class AuthenticationService {

    endpoint = environment.baseUrl;

    constructor(private http:HttpClient) {
    }

    login(user:User):Observable<any> {

        return this.http.post(this.endpoint + "/login", user)
            .pipe(
                map((res: JwtResponse) => {
                    sessionStorage.setItem('username', user.username);
                    let tokenStr = 'Bearer ' + res.jwtToken;
                    sessionStorage.setItem('token', tokenStr);

                    return res;
                }),
                catchError(error => {
                    /* Provide a default fallback value ([]) to the subscribers,
                     despite the fact that the original Observable did error out.
                     So the error handling callback in subscribe() is not invoked anymore.
                     */
                    //return of([]);
                    /* --------------- */

                    /* Rethrow the error. */
                    return throwError(error);
                }));
    }

    getLoggedInUser() {
        let user = sessionStorage.getItem('username');
        return user;
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        return !(user === null);
    }

    logout() {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('userProfile');
        sessionStorage.removeItem('token');
    }

    signup(registrationForm : RegistrationForm):Observable<any> {
        
        return this.http.post(this.endpoint + "/sign-up", registrationForm)
            .pipe(
                map(res => {
                    return res;
                }),
                catchError(error => {
                    //return of(error);
                    return throwError(error);
                })
            );
    }
}
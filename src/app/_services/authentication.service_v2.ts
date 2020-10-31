import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from 'ngx-webstorage-service';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { RegistrationForm } from '../models/registration-form';
import { environment } from  '../../environments/environment';

const STORAGE_KEY = 'current-user';
export const USER_SERVICE_STORAGE = new InjectionToken<StorageService>('USER_SERVICE_STORAGE');

@Injectable({
    providedIn: 'root'
})
@Injectable()
export class AuthenticationServiceV2 {
    private loggedInUserSubject:BehaviorSubject<User>;
    public loggedInUser$:Observable<User>;

    endpoint = environment.baseUrl;

    constructor(private http:HttpClient,
                @Inject(USER_SERVICE_STORAGE) private storage: StorageService) {
        this.loggedInUserSubject = new BehaviorSubject<User>(this.getUserFromStorage());
        this.loggedInUser$ = this.loggedInUserSubject.asObservable();
    }

    public setLoggedUser(loggedUser:User):void {
        this.storage.set(STORAGE_KEY, loggedUser);
        this.loggedInUserSubject.next(this.getUserFromStorage());
    }
    private getUserFromStorage(): User {
        const currentUser: User = this.storage.get(STORAGE_KEY) || null;
        return currentUser;
    }

    public getLoggedUser():User {
        return this.loggedInUserSubject.value;
    }

    login(user:User):Observable<any> {

        return this.http.post(this.endpoint + "/perform_login", user)
            .pipe(
                map(res => {
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

    logout():Observable<any> {
        return this.http.get(this.endpoint + "/perform_logout")
            .pipe(
                map(res => {
                    this.setLoggedUser(null);
                    return res;
                }),
                catchError(error => {
                    return of(error);
                }));
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
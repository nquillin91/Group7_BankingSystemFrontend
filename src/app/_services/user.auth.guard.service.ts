import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserAuthService } from './user.auth.service';
@Injectable()
export class UserAuthGuardService {
constructor(private _data: UserAuthService) { }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
return this._data.isAuthenticated();
}
}
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    
    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
     
       if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
       	request = request.clone({
       		setHeaders: {
       			Authorization: sessionStorage.getItem('token')
       		}
       	})
       }

       return next.handle(request);
    }
}
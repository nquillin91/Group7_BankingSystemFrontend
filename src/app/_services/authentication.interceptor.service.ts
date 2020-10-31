import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    
    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
     
       const clonedRequest =
            request.clone(
                { withCredentials: true }
            );
        
        return next.handle(clonedRequest);
    }
}
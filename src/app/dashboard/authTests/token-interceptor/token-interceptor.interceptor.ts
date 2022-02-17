import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../../services/auth/auth.service";

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizedReq = request.clone(
      {
        setHeaders: {
          Authorization :`Bearer ${this._authService.getToken()}`
        }
      }
    )
    return next.handle(tokenizedReq)

  }
}

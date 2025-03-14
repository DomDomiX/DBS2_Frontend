import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

// Autor: Josef Ráž

// HTTP interceptor pro bearer token
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.token;
        req = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + authToken
            }
        });
        return next.handle(req);
    }
}
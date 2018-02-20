import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{

  constructor() { }

  intercept(req, next) {
    return next.handle(req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('cointer.token'))
  }))
  }
}

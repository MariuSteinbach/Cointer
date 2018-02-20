import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{

  constructor() { }

  intercept(req, next) {
    return next.handle(req.clone({
<<<<<<< HEAD
      headers: req.headers.set('Authorization': 'Bearer ' + localStorage.getItem('cointer.token'))
    }))
=======
      headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('cointer.token'))
  }))
>>>>>>> 346e44c80e6c61af2dad90b3b2dfdb1280849cf2
  }
}

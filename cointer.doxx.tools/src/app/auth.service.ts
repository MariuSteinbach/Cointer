import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  get isAuthenticated() {
    return !!localStorage.getItem("cointer.token")
  }

  register(Creds) {
    this.http.post<any>('https://cointer.steinbach.io/account/apiregister', Creds).subscribe(res => {
      this.authenticate(res)
    })
  }

  login(Creds) {
    this.http.post<any>('https://cointer.steinbach.io/account/apilogin', Creds).subscribe(res => {
      this.authenticate(res)
    })
  }

  authenticate(res) {
    localStorage.setItem("cointer.token", res)

    this.router.navigate(['/coins'])
  }

  logout() {
    localStorage.removeItem("cointer.token")
  }
}

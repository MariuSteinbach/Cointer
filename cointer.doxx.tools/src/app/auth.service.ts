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
<<<<<<< HEAD
    this.http.post<any>('https://cointer.steinbach.io/account/apiregister', Creds).subscribe(res => {
=======
    this.http.post<any>('https://localhost:44363/account/apiregister', Creds).subscribe(res => {
>>>>>>> 346e44c80e6c61af2dad90b3b2dfdb1280849cf2
      this.authenticate(res)
    })
  }

  login(Creds) {
<<<<<<< HEAD
    this.http.post<any>('https://cointer.steinbach.io/account/apilogin', Creds).subscribe(res => {
=======
    this.http.post<any>('https://localhost:44363/account/apilogin', Creds).subscribe(res => {
>>>>>>> 346e44c80e6c61af2dad90b3b2dfdb1280849cf2
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

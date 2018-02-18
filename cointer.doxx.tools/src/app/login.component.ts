import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  form

  constructor(private auth: AuthService, private fb: FormBuilder)
  {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  register(Creds) {
    this.auth.register(Creds)
  }
}

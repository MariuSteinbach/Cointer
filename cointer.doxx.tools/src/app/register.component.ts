import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {

  form
  recaptchaStr = '';

  onLoginSubmit(): void {
  }

  onLoginClick(captchaRef: any): void {
    if (this.recaptchaStr) {
      captchaRef.reset();
    }
    captchaRef.execute();
  }
  public resolved(captchaResponse: string): void {
    this.recaptchaStr = captchaResponse;
    if (this.recaptchaStr) {
      this.onLoginSubmit();
    }
  }

  constructor(private auth: AuthService, private fb: FormBuilder)
  {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    })
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { RouterModule} from '@angular/router';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatGridTile} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  MatExpansionModule,
  MatExpansionPanelHeader
} from '@angular/material';

import {
  RECAPTCHA_SETTINGS,
  RecaptchaSettings,
  RecaptchaLoaderService,
  RecaptchaModule,
} from 'ng-recaptcha';

import { AppComponent } from './app.component';

import { CoinsComponent} from './coins.component';
import { ValuesComponent } from './values.component'
import { NavComponent } from './nav.component';
import { RegisterComponent } from './register.component';
import { LoginComponent} from './login.component';

import { ApiService } from './api.service'
import { AuthService} from './auth.service';

import { AuthInterceptor} from './auth.interceptor';

const routes = [
  {
    path: 'coins',
    component: CoinsComponent
  },
  {
    path: 'values',
    component: ValuesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

const globalSettings: RecaptchaSettings = {siteKey: '6LcDEUgUAAAAAItNDRDbqLDeuK7C-eTSElk6b7y8'};

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    ValuesComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    MatProgressBarModule,
    MatExpansionModule,
    RecaptchaModule.forRoot()
  ],
  providers: [
    ApiService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: globalSettings
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

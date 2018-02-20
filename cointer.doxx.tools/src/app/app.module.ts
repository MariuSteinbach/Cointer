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
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material';

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
    MatToolbarModule
  ],
  providers: [
    ApiService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

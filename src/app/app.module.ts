import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CustFormComponent } from './cust-form/cust-form.component';
import { CountryBoxComponent } from './country-box/country-box.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';

import { LoginServiceService } from './login-service.service';
import { ProfileBubbleComponent } from './profile-bubble/profile-bubble.component';

const appRoutes: Routes = [
  {path: 'customer-information', component: CustFormComponent},
  { path: 'result', component: ResultComponent },
  { path: 'login', component: LoginComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CustFormComponent,
    CountryBoxComponent,
    ResultComponent,
    LoginComponent,
    ProfileBubbleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

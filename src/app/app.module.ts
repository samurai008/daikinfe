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
import { CompanyProfileComponent } from './company-profile/company-profile/company-profile.component';
import { LoadingComponent } from './loading/loading.component';

const appRoutes: Routes = [
  {path: 'customer-information', component: CustFormComponent},
  { path: 'result', component: ResultComponent },
  { path: 'login', component: LoginComponent },
  { path: 'company-profile', component: CompanyProfileComponent },
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
    ProfileBubbleComponent,
    CompanyProfileComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false}
    ),
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

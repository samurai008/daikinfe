import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarItemsComponent } from './nav-bar-items/nav-bar-items.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CustFormComponent } from './cust-form/cust-form.component';
import { CountryBoxComponent } from './country-box/country-box.component';
import { ResultComponent } from './result/result.component';

const appRoutes: Routes = [
  {path: 'customer-information', component: CustFormComponent},
  {path: '', redirectTo: '/customer-information', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarItemsComponent,
    NavBarComponent,
    CustFormComponent,
    CountryBoxComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

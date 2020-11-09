import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


import {First} from './First/first.component';
import { PasswordComponent } from './Password/password.component';
import { NgForNIfComponent } from './ng-for-nif/ng-for-nif.component';

@NgModule({
  // when component used with in the app module
  declarations: [
    AppComponent,
    First,
    PasswordComponent,
    NgForNIfComponent
  ],
  // used for external import's only from node module
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  // if you want to add the component at index level
  bootstrap: [AppComponent]
})
export class AppModule { }

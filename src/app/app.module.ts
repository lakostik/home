import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LegacyLayoutComponent } from './legacy-layout/legacy-layout.component';
import { CommonModule } from "@angular/common";
import {CommonsModule} from "./commons/commons.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LegacyLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CommonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

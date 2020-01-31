import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    ProductComponent,
    PortfolioComponent,
    RegisterComponent,
    LoginComponent,
    ProductCardsComponent
  ],
  imports: [
    BrowserModule,MatCardModule,MatButtonModule,MatToolbarModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,CommonModule,
    FormsModule,ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

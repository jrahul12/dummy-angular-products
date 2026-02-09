import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { ProductDashboardComponent } from './component/product-dashboard/product-dashboard.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductSingleCardComponent } from './component/product-single-card/product-single-card.component';

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDividerModule } from "@angular/material/divider";
import { NavbarComponent } from './component/navbar/navbar.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from "@angular/material/card";
import { BuyNowComponent } from './component/buy-now/buy-now.component';
import { UpiComponent } from './component/upi/upi.component';
import { DebitComponent } from './component/debit/debit.component';
import { NetBankingComponent } from './component/net-banking/net-banking.component';
import { CashComponent } from './component/cash/cash.component';
import { CartComponent } from './component/cart/cart.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";
import { OptionsComponent } from './component2/options/options.component';
import { BeautyComponent } from './component2/beauty/beauty.component';
import { SingleBeautyComponent } from './component2/single-beauty/single-beauty.component';
import { SingleMobileComponent } from './component2/single-mobile/single-mobile.component';
import { MobileComponent } from './component2/mobile/mobile.component';
import { LaptopComponent } from './component2/laptop/laptop.component';
import { LaptopSingleComponent } from './component2/laptop-single/laptop-single.component';
import { GrocaryComponent } from './grocery/grocary/grocary.component';
import { CartsComponent } from './component2/carts/carts.component';
import { MatBadgeModule } from "@angular/material/badge";
import { LoginComponent } from './login-folder/login/login.component';
import { SignUpComponent } from './login-folder/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProductCardComponent,
    ProductSingleCardComponent,
    NavbarComponent,
    FilterPipe,
    BuyNowComponent,
    UpiComponent,
    DebitComponent,
    NetBankingComponent,
    CashComponent,
    CartComponent,
    ConfirmComponent,
    OptionsComponent,
    BeautyComponent,
    SingleBeautyComponent,
    SingleMobileComponent,
    MobileComponent,
    LaptopComponent,
    LaptopSingleComponent,
    GrocaryComponent,
    CartsComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDividerModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatBadgeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

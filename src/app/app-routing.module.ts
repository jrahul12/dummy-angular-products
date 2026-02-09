import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from './component/product-dashboard/product-dashboard.component';
import { ProductSingleCardComponent } from './component/product-single-card/product-single-card.component';
import { BuyNowComponent } from './component/buy-now/buy-now.component';
import { CashComponent } from './component/cash/cash.component';
import { DebitComponent } from './component/debit/debit.component';
import { NetBankingComponent } from './component/net-banking/net-banking.component';
import { UpiComponent } from './component/upi/upi.component';
import { CartComponent } from './component/cart/cart.component';
import { BeautyComponent } from './component2/beauty/beauty.component';
import { SingleBeautyComponent } from './component2/single-beauty/single-beauty.component';
import { MobileComponent } from './component2/mobile/mobile.component';
import { SingleMobileComponent } from './component2/single-mobile/single-mobile.component';
import { LaptopComponent } from './component2/laptop/laptop.component';
import { LaptopSingleComponent } from './component2/laptop-single/laptop-single.component';
import { GrocaryComponent } from './grocery/grocary/grocary.component';
import { CartsComponent } from './component2/carts/carts.component';
import { LoginComponent } from './login-folder/login/login.component';
import { SignUpComponent } from './login-folder/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: ProductDashboardComponent
  },
  {
    path: 'all',
    component: ProductDashboardComponent
  },
  {
    path: 'single/:id',
    component: ProductSingleCardComponent
  },
  {
    path: 'buy',
    component: BuyNowComponent
  },
  {
    path: 'cash',
    component: CashComponent
  },
  {
    path: 'debit',
    component: DebitComponent
  },
  {
    path: 'net',
    component: NetBankingComponent
  },
  {
    path: 'upi',
    component: UpiComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'beauty',
    component: BeautyComponent
  },
  {
    path: 'beauty/:id',
    component: SingleBeautyComponent
  },
  {
    path: 'mobile',
    component: MobileComponent
  },
  {
    path: 'mobile/:id',
    component: SingleMobileComponent
  },
  {
    path: 'laptop',
    component: LaptopComponent
  },
  {
    path: 'laptop/:id',
    component: LaptopSingleComponent
  },
  {
    path: 'grocery',
    component: GrocaryComponent
  },
  {
    path: 'carts',
    component: CartsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

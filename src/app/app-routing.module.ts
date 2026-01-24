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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

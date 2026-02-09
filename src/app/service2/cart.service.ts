import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private CART_KEY = 'cart';

  getCart(): any[] {
    const oldCart = localStorage.getItem(this.CART_KEY);
    return oldCart ? JSON.parse(oldCart) : [];
  }

  saveCart(cart: any[]) {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
  }

  addToCart(product: any) {
    let cart = this.getCart();

    const existingItem = cart.find(
      (item: any) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({ product: product, qty: 1 });
    }

    this.saveCart(cart);
  }

  removeFromCart(productId: number) {
    let cart = this.getCart();
    cart = cart.filter((item: any) => item.product.id !== productId);
    this.saveCart(cart);
  }

  updateQty(productId: number, qty: number) {
    let cart = this.getCart();
    const item = cart.find((i: any) => i.product.id === productId);
    if (item) item.qty = qty;
    this.saveCart(cart);
  }

  clearCart() {
    localStorage.removeItem(this.CART_KEY);
  }

}

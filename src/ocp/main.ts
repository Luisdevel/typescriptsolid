/*
Open/Close principle
Entidades devem estar abertas para extensão, mas fechadas para modificação
*/

import { Messaging } from './services/messaging';
import { Order } from './class/order';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './class/shopping-cart';
import { Product } from './class/product';
import { NoDiscount } from './class/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

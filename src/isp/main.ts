/*
Interface segregation principle (Princípio da segregação de Interface) -
os clientes não devem ser forçados a depender de types, interfaces ou membros
abstratos que não utilizam
*/

import { Messaging } from './services/messaging';
import { Order } from './class/order';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './class/shopping-cart';
import { Product } from './class/product';
import { NoDiscount } from './class/discount';
import { EnterpriseCustomer, IndividualCustomer } from './class/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Luis',
//   'Henrique',
//   '000.000.000-00',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Chevrolet',
  '065651651651651/1561',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

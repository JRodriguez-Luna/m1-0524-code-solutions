"use strict";
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
// create new array containing objects
const price = prices.map((org_num) => ({
    price: org_num,
    salePrice: org_num / 2,
}));
console.log('price:', price);
// create new array containing number format
const formatPrice = prices.map((num) => `$${num}`);
console.log('formatPrice:', formatPrice);

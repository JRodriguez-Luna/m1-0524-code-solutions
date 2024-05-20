'use strict';
const orderHistory = [
  {
    orderDatePlaced: 'Aug 4, 2020',
    orderDateReceived: 'Aug 8, 2020',
    numberOfItems: 1,
    shipTo: 'JS Masher',
    total: 34,
    orderNumber: '114-3941689-8772232',
    deliveryStatus: { delivered: true },
    item: [
      {
        name: 'JavaScript for impatient programmers',
        category: 'Book',
        price: 31.55,
      },
    ],
  },
  {
    orderDatePlaced: 'July 19, 2020',
    orderDateReceived: 'Jul 20, 2020',
    numberOfItems: 1,
    shipTo: 'JS Masher',
    total: 44.53,
    orderNumber: '113-9984268-1280257',
    deliveryStatus: { delivered: true },
    item: [
      {
        name: 'The Timeless Way of Building',
        category: 'Book',
        price: 41.33,
      },
    ],
  },
  {
    orderDatePlaced: 'July 4, 2020',
    orderDateReceived: 'Jul 7, 2020',
    numberOfItems: 1,
    shipTo: 'JS Masher',
    total: 17.22,
    orderNumber: '11428755579059409',
    deliveryStatus: { delivered: true },
    item: [
      {
        name: 'GameCube Controller Adapter...',
        category: 'Electronic',
        price: 15.98,
      },
    ],
  },
  {
    orderDatePlaced: 'July 3, 2020',
    orderDateReceived: 'Jul 5, 2020',
    numberOfItems: 2,
    shipTo: 'JS Masher',
    total: 138.93,
    orderNumber: '11328831772648248',
    deliveryStatus: { delivered: true },
    item: [
      {
        name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        category: 'Electronic',
        price: 94.95,
      },
      {
        name: 'The Art of Sql',
        category: 'Book',
        price: 33.99,
      },
    ],
  },
];
console.log('value of orderHistory:', orderHistory);

import React from 'react';
import * as FaIcons from 'react-icons/fa';

const manufacturer = ['Samsung', 'Apple', 'Xiaomi', 'Motorola', 'Huawei'];

const initialState = {
  categories: [
    {
      id: 'laptop',
      name: 'Laptop',
      path: 'laptop',
      icon: <FaIcons.FaLaptop />,
      fade: true,
      amount: 6,
    },
    {
      id: 'mouse',
      name: 'Mouse',
      path: 'mouse',
      icon: <FaIcons.FaMouse />,
      fade: true,
      amount: 4,
    },
    {
      id: 'keyboard',
      name: 'Keyboard',
      path: 'keyboard',
      icon: <FaIcons.FaKeyboard />,
      fade: false,
      amount: 5,
    },
    {
      id: 'smartphone',
      name: 'Smartphone',
      path: 'smartphone',
      icon: <FaIcons.FaPhone />,
      fade: false,
      amount: 4,
    },
    {
      id: 'headphone',
      name: 'Headphone',
      path: 'headphone',
      icon: <FaIcons.FaHeadphones />,
      fade: false,
      amount: 6,
    },
  ],

  more: [
    { description: { id: 'description', header: 'tbc', show: false } },
    {
      reviews: {
        id: 'reviews(0)',
        header: 'Add a review',
        rating: 'Your Rating',
        show: true,
      },
    },
    { specification: { id: 'specification', header: 'tbc', show: false } },
    { customTab: { id: 'custom tab', header: 'tbc', show: false } },
  ],

  brands: [
    {
      id: 'Brand-1',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-2',
      image: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01111022/1357.png',
    },
    {
      id: 'Brand-3',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-4',
      image: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01111022/1357.png',
    },
    {
      id: 'Brand-5',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-6',
      image: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01111022/1357.png',
    },
    {
      id: 'Brand-7',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-8',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-9',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-10',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-11',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-12',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-13',
      image: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01111022/1357.png',
    },
    {
      id: 'Brand-14',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-15',
      image: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01111022/1357.png',
    },
    {
      id: 'Brand-16',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-17',
      image: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01111022/1357.png',
    },
    {
      id: 'Brand-18',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-19',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-20',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-21',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-22',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-23',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-24',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
  ],
  products: [
    /**************** LAPTOP ****************/
    {
      id: `bart-electronic-laptop-1`,
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } aart Electronic Laptop 1`,
      category: 'laptop',
      image: 'images/Laptop/laptop1.jpg',
      imageAlt: 'laptop',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: false,
      starChange: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 2,
    },
    {
      id: 'bart-electronic-laptop-2',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Aart Electronic Laptop 2`,
      category: 'laptop',
      image: 'images/Laptop/laptop2.jpg',
      imageAlt: 'laptop',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      hotDeal: true,
      promoCategory: true,
      heart: false,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-3',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Rart Electronic Laptop 3`,
      category: 'laptop',
      image: 'images/Laptop/laptop3.jpg',
      imageAlt: 'laptop',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      arrow: false,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 2,
      heart: true,
    },
    {
      id: 'bart-electronic-laptop-4',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Jart Electronic Laptop 4`,
      category: 'laptop',
      image: 'images/Laptop/laptop4.jpg',
      imageAlt: 'laptop',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-5',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 5`,
      category: 'laptop',
      image: 'images/Laptop/laptop5.jpg',
      imageAlt: 'laptop',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 0,
      heart: true,
    },
    {
      id: 'bart-electronic-laptop-6',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 6`,
      category: 'laptop',
      image: 'images/Laptop/laptop6.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: false,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-7',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 7`,
      category: 'laptop',
      image: 'images/Laptop/laptop7.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: false,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-8',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 8`,
      category: 'laptop',
      image: 'images/Laptop/laptop8.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-9',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 9`,
      category: 'laptop',
      image: 'images/Laptop/laptop9.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-10',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 10`,
      category: 'laptop',
      image: 'images/Laptop/laptop10.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-11',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 11`,
      category: 'laptop',
      image: 'images/Laptop/laptop11.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-12',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 12`,
      category: 'laptop',
      image: 'images/Laptop/laptop12.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-13',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 13`,
      category: 'laptop',
      image: 'images/Laptop/laptop13.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-14',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 14`,
      category: 'laptop',
      image: 'images/Laptop/laptop14.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-15',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 15`,
      category: 'laptop',
      image: 'images/Laptop/laptop15.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-16',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 16`,
      category: 'laptop',
      image: 'images/Laptop/laptop16.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-17',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 17`,
      category: 'laptop',
      image: 'images/Laptop/laptop17.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-18',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 18`,
      category: 'laptop',
      image: 'images/Laptop/laptop18.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-19',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 19`,
      category: 'laptop',
      image: 'images/Laptop/laptop19.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-20',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 20`,
      category: 'laptop',
      image: 'images/Laptop/laptop20.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-21',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 21`,
      category: 'laptop',
      image: 'images/Laptop/laptop21.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-22',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 22`,
      category: 'laptop',
      image: 'images/Laptop/laptop22.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-23',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 23`,
      category: 'laptop',
      image: 'images/Laptop/laptop23.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-laptop-24',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Laptop 24`,
      category: 'laptop',
      image: 'images/Laptop/laptop24.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    /**************** MOUSE ****************/
    {
      id: 'bart-electronic-mouse-1',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 1`,
      category: 'mouse',
      image: 'images/Mouse/mouse1.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: false,
      starChange: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 2,
    },
    {
      id: 'bart-electronic-mouse-2',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 2`,
      category: 'mouse',
      image: 'images/Mouse/mouse2.jpg',
      imageAlt: 'chair',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      hotDeal: true,
      promoCategory: true,
      heart: false,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-3',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 3`,
      category: 'mouse',
      image: 'images/Mouse/mouse3.jpg',
      imageAlt: 'bed',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      arrow: false,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 2,
      heart: true,
    },
    {
      id: 'bart-electronic-mouse-4',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 4`,
      category: 'mouse',
      image: 'images/Mouse/mouse4.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-5',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 5`,
      category: 'mouse',
      image: 'images/Mouse/mouse5.jpg',
      imageAlt: 'sofa',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 0,
      heart: true,
    },
    {
      id: 'bart-electronic-mouse-6',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 6`,
      category: 'mouse',
      image: 'images/Mouse/mouse6.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: false,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-7',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 7`,
      category: 'mouse',
      image: 'images/Mouse/mouse7.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: false,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-8',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 8`,
      category: 'mouse',
      image: 'images/Mouse/mouse8.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-9',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 9`,
      category: 'mouse',
      image: 'images/Mouse/mouse9.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-10',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 10`,
      category: 'mouse',
      image: 'images/Mouse/mouse10.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-11',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 11`,
      category: 'mouse',
      image: 'images/Mouse/mouse11.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-12',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 12`,
      category: 'mouse',
      image: 'images/Mouse/mouse12.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-13',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 13`,
      category: 'mouse',
      image: 'images/Mouse/mouse13.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-14',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 14`,
      category: 'mouse',
      image: 'images/Mouse/mouse14.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-15',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 15`,
      category: 'mouse',
      image: 'images/Mouse/mouse15.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-16',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 16`,
      category: 'mouse',
      image: 'images/Mouse/mouse16.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-17',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 17`,
      category: 'mouse',
      image: 'images/Mouse/mouse17.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-18',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 18`,
      category: 'mouse',
      image: 'images/Mouse/mouse18.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-19',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 19`,
      category: 'mouse',
      image: 'images/Mouse/mouse19.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-20',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 20`,
      category: 'mouse',
      image: 'images/Mouse/mouse20.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-21',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 21`,
      category: 'mouse',
      image: 'images/Mouse/mouse21.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-22',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 22`,
      category: 'mouse',
      image: 'images/Mouse/mouse22.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-23',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 23`,
      category: 'mouse',
      image: 'images/Mouse/mouse23.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-mouse-24',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Mouse 24`,
      category: 'mouse',
      image: 'images/Mouse/mouse24.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    /**************** KEYBOARD ****************/
    {
      id: 'bart-electronic-keyboard-1',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 1`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard1.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: false,
      starChange: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 2,
    },
    {
      id: 'bart-electronic-keyboard-2',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 2`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard2.jpg',
      imageAlt: 'chair',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      hotDeal: true,
      promoCategory: true,
      heart: false,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-3',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 3`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard3.jpg',
      imageAlt: 'bed',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      arrow: false,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 2,
      heart: true,
    },
    {
      id: 'bart-electronic-keyboard-4',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 4`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard4.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-5',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 5`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard5.jpg',
      imageAlt: 'sofa',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 0,
      heart: true,
    },
    {
      id: 'bart-electronic-keyboard-6',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 6`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard6.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: false,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-7',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 7`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard7.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: false,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-8',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 8`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard8.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-9',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 9`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard9.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-10',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 10`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard10.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-11',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 11`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard11.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-12',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 12`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard12.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-13',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 13`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard13.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-14',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 14`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard14.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-15',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 15`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard15.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-16',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 16`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard16.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-17',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 17`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard17.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-18',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 18`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard18.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-19',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 19`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard19.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-20',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 20`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard20.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-21',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 21`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard21.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-22',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 22`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard22.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-23',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 23`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard23.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-keyboard-24',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Keyboard 24`,
      category: 'keyboard',
      image: 'images/Keyboard/keyboard24.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    /**************** SMARTPHONE ****************/
    {
      id: 'bart-electronic-smartphone-1',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 1`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone1.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: false,
      starChange: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 2,
    },
    {
      id: 'bart-electronic-smartphone-2',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 2`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone2.jpg',
      imageAlt: 'chair',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: false,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-3',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 3`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone3.jpg',
      imageAlt: 'bed',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      arrow: false,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 2,
      heart: true,
    },
    {
      id: 'bart-electronic-smartphone-4',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 4`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone4.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-5',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 5`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone5.jpg',
      imageAlt: 'sofa',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 0,
      heart: true,
    },
    {
      id: 'bart-electronic-smartphone-6',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 6`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone6.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: false,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-7',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 7`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone7.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: false,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-8',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 8`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone8.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-9',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 9`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone9.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-10',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 10`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone10.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-11',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 11`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone11.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-12',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 12`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone12.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-13',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 13`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone13.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-14',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 14`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone14.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-15',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 15`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone15.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-16',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 16`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone16.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-17',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 17`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone17.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-18',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 18`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone18.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-19',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 19`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone19.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-20',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 20`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone20.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-21',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 21`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone21.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-22',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 22`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone22.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-23',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 23`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone23.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-smartphone-24',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Smartphone 24`,
      category: 'smartphone',
      image: 'images/Smartphone/smartphone24.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    /**************** HEADPHONE ****************/
    {
      id: 'bart-electronic-headphone-1',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 1`,
      category: 'headphone',
      image: 'images/Headphones/headphone1.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: false,
      starChange: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 2,
    },
    {
      id: 'bart-electronic-headphone-2',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 2`,
      category: 'headphone',
      image: 'images/Headphones/headphone2.jpg',
      imageAlt: 'chair',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: false,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-3',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 3`,
      category: 'headphone',
      image: 'images/Headphones/headphone3.jpg',
      imageAlt: 'bed',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      arrow: false,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 2,
      heart: true,
    },
    {
      id: 'bart-electronic-headphone-4',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 4`,
      category: 'headphone',
      image: 'images/Headphones/headphone4.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-5',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 5`,
      category: 'headphone',
      image: 'images/Headphones/headphone5.jpg',
      imageAlt: 'sofa',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 0,
      heart: true,
    },
    {
      id: 'bart-electronic-headphone-6',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 6`,
      category: 'headphone',
      image: 'images/Headphones/headphone6.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: false,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-7',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 7`,
      category: 'headphone',
      image: 'images/Headphones/headphone7.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: false,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-8',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 8`,
      category: 'headphone',
      image: 'images/Headphones/headphone8.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-9',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 9`,
      category: 'headphone',
      image: 'images/Headphones/headphone9.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-10',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 10`,
      category: 'headphone',
      image: 'images/Headphones/headphone10.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-11',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 11`,
      category: 'headphone',
      image: 'images/Headphones/headphone11.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-12',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 12`,
      category: 'headphone',
      image: 'images/Headphones/headphone12.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-13',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 13`,
      category: 'headphone',
      image: 'images/Headphones/headphone13.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-14',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 14`,
      category: 'headphone',
      image: 'images/Headphones/headphone14.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-15',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 15`,
      category: 'headphone',
      image: 'images/Headphones/headphone15.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-16',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 16`,
      category: 'headphone',
      image: 'images/Headphones/headphone16.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-17',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 17`,
      category: 'headphone',
      image: 'images/Headphones/headphone17.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-18',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 18`,
      category: 'headphone',
      image: 'images/Headphones/headphone18.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-19',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 19`,
      category: 'headphone',
      image: 'images/Headphones/headphone19.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-20',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 20`,
      category: 'headphone',
      image: 'images/Headphones/headphone20.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-21',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 21`,
      category: 'headphone',
      image: 'images/Headphones/headphone21.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-22',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 22`,
      category: 'headphone',
      image: 'images/Headphones/headphone22.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-23',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 23`,
      category: 'headphone',
      image: 'images/Headphones/headphone23.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'bart-electronic-headphone-24',
      name: `${
        manufacturer[Math.floor(Math.random() * manufacturer.length)]
      } Bart Electronic Headphones 24`,
      category: 'headphone',
      image: 'images/Headphones/headphone24.jpg',
      price: Math.floor(Math.random() * 300) + 20,
      olderPrice: Math.floor(Math.random() * 400) + 300,
      stars: Math.floor(Math.random() * 5) + 1,
      manufacturer: manufacturer[Math.floor(Math.random() * manufacturer.length)],
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
  ],
  promoProducts: {
    name: 'newest',
    spanName: 'technology',
    subName: 'save up to 50% of all electronic',
    button: 'shop now',
    images: [
      {
        id: 1,
        image: 'images/PromoProduct/promo1.jpg',
        imageAlt: 'chair',
      },
      {
        id: 2,
        image: 'images/PromoProduct/promo2.jpg',
        imageAlt: 'bed',
      },
      {
        id: 3,
        image: 'images/PromoProduct/promo3.jpg',
        imageAlt: 'sofa',
      },
    ],
  },
  cart: {
    products: [],
  },
  feedback: [
    {
      id: 1,
      content: 'Great contact. Fast delivery. I will back again.',
      photo: 'https://i.ibb.co/0mTvQjz/099962-1.jpg',
      name: 'John Smith',
      position: 'Pro user',
    },
    {
      id: 2,
      content: 'Products are high quality and match description.',
      photo: 'https://i.ibb.co/0GTZk8M/099947-1.jpg',
      name: 'Lisa Brown',
      position: 'Pro user',
    },
    {
      id: 3,
      content: 'Best equipment I ever used for smallest !',
      photo: 'https://i.ibb.co/ZmBY6jg/089960-1.jpg',
      name: 'Marc Leop',
      position: 'Pro user',
    },
  ],
  bannerData: {
    description: 'Bedroom <span>Furniture</span>',
    bargain: 'Always <span> 25% </span> off or more',
    home: 'home',
    furniture: 'furniture',
  },
  saleContent: [
    {
      id: 1,
      img: `${window.location.origin}/images/Laptop/laptop3.jpg`,
      title: 'HOME WORK',
      subtitle: 'LAPTOP',
      promo: 'work from home in every condition',
      reduce: '-20%',
    },
    {
      id: 2,
      img: `${window.location.origin}/images/Keyboard/keyboard23.jpg`,
      title: 'GAMER ',
      subtitle: 'SPECIAL SET',
      promo: 'perfect for pro-players',
      reduce: '-15%',
    },
    {
      id: 3,
      img: `${window.location.origin}/images/Mouse/mouse23.jpg`,
      title: 'MUSIC LOVER',
      subtitle: 'KIT',
      promo: 'save up buing smartphone with headphones',
      reduce: '-30%',
    },
  ],
  tagsContent: {
    firstTag: 'Table',
    secondTag: 'Chair',
    thirdTag: 'Hand Bag',
    forthTag: 'Women',
    fifthTag: 'Fashion',
    sixthTag: 'Clothes',
  },
};

export default initialState;

const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      image: 'src=../../images/bed.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      heart: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      image: 'src=../../images/table.jpeg',
      price: 30,
      olderPrice: `$ ${50}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      heart: false,
      arrow: true,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      image: 'src=../../images/sofa2.jpeg',
      price: 30,
      olderPrice: `$ ${35}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      heart: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      image: 'src=../../images/bed.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      image: 'src=../../images/bed2.jpeg',
      price: 30,
      olderPrice: `$ ${60}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      heart: true,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      image: 'src=../../images/table.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      heart: false,
      arrow: true,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      image: 'src=../../images/bed2.jpeg',
      price: 30,
      olderPrice: `$ ${40}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      heart: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      image: 'https://images.pexels.com/photos/4210854/pexels-photo-4210854.jpeg',
      price: 30,
      olderPrice: `$ ${40}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      image: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      image: 'https://images.pexels.com/photos/4210854/pexels-photo-4210854.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      image: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg',
      price: 30,
      oolderPrice: `$ ${35}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      image: 'https://images.pexels.com/photos/4210854/pexels-photo-4210854.jpeg',
      price: 30,
      olderPrice: `$ ${50}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      image: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg',
      price: 30,
      oolderPrice: `$ ${40}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      image: 'https://images.pexels.com/photos/1841149/pexels-photo-1841149.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      image: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      image: 'https://images.pexels.com/photos/4210854/pexels-photo-4210854.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      image: 'https://images.pexels.com/photos/5337386/pexels-photo-5337386.jpeg',
      price: 30,
      olderPrice: `$ ${45}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      image: 'https://images.pexels.com/photos/5337386/pexels-photo-5337386.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      image: 'src=../../images/bed2.jpeg',
      price: 30,
      olderPrice: `$ ${55}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
  ],
  cart: {
    products: [],
  },
  saleContent: {
    sofa: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg',
    goldenChair: 'https://images.pexels.com/photos/5379190/pexels-photo-5379190.jpeg',
    yellowChair: 'https://images.pexels.com/photos/4056469/pexels-photo-4056469.jpeg',
    bed: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
    content1: 'GUEST ROOM SOFA',
    bargain: '-20%',
    content2: 'OFFICE CHAIR COLLECTION',
    price: '$200.00',
    content3: 'SPECIAL COLLECTION',
    info: 'SAVE UP 45% OF FURNITURE',
  },
};

export default initialState;

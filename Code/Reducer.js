// reducers.js
const initialState = {
    products: [
        { id: 1, name: 'Rang jee', make:'silk', model: '1200',  image: require('./assets/d1.jpg') },
  { id: 2, name: 'Rang Jeee', make: 'silk', model: '2222',  image: require('./assets/d2.jpg') },
  { id: 3, name: 'limlight', make: 'silk', model: '2000',  image: require('./assets/d3.jpg') },
  { id: 4, name: 'j.', make: ' silk', model: '3000',  image: require('./assets/d4.jpg') },
  { id: 5, name: 'j.', make: 'silk', model: '2000',  image: require('./assets/d5.jpg') },
  { id: 6, name: 'sweater', make: 'wool', model: '3000',  image: require('./assets/d6.jpg') },
  { id: 7, name: 'Zipper', make: 'wool', model: '1200',  image: require('./assets/d7.jpg') },
  { id: 8, name: 'Jacket', make: 'Shiner', model: '2220',  image: require('./assets/d8.jpg') },
  { id: 9, name: 'Zipper', make: 'shinner', model: '2000',  image: require('./assets/d9.jpg') },
  { id: 10, name: 'Jacket', make: ' Leather', model: '3000',  image: require('./assets/d10.jpg') },


    ],
    cart: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
  
      case 'TOGGLE_FAVORITE':
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload
              ? { ...product, favorite: !product.favorite }
              : product
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
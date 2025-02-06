// import { configureStore } from "@reduxjs/toolkit";
// import RootReducer from './RootReducer'
// const Store=configureStore({
//     reducer:RootReducer
// });
// export default Store;
// store.js
import { createStore } from 'redux';
import rootReducer from './Reducer';

const Store = createStore(rootReducer);

export default Store;


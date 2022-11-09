import { configureStore } from '@reduxjs/toolkit';
import cart from './features/cart';


const store = configureStore({
      reducer: cart
})

export default store;
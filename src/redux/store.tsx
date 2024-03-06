import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import authSlice from "./auth/authSlice";
import cartSlice from "./cart/cartSlice";
import reviewsSlice from "./reviews/reviewsSlice";

const store = configureStore({
  reducer: { 
    products: productsSlice,
    auth: authSlice,
    cart: cartSlice,
    reviews:reviewsSlice
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
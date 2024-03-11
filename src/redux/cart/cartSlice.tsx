import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItems } from "../../types/products.type";


interface CartState {
  CartItems: CartItems[],
  cartLength: number,
  total: number,
  devise: string,
}

const initialState: CartState = {
  CartItems: [],
  cartLength: 0,
  total: 0,
  devise: "EUR",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    showCartFromLocalstorage(state) {
      const localStorageData = localStorage.getItem("cart");      
      if (localStorageData) {
        const storage = JSON.parse(localStorageData);
        state.CartItems = storage?.CartItems;
        state.cartLength = storage?.cartLength;
        state.devise = storage?.devise;
        state.total = storage?.total;
      }
    },

    addToCart(state, action: PayloadAction<CartItems>) {
      let sumItems : number = 0;
      const findItemId = state.CartItems.find((key) => key.id === action.payload.id);

      if (findItemId && findItemId !== undefined) {
        const multiply = (findItemId.price * findItemId.quantity).toFixed(2) ;
        findItemId.quantity = action.payload.quantity;
        findItemId.price = action.payload.price;
        findItemId.priceQty = Number(multiply);
      } else {
        const priceQtyTransformed = (action.payload.quantity * action.payload.price).toFixed(2)
        state.CartItems.push({
          id: action.payload.id,
          quantity: action.payload.quantity,
          price: action.payload.price,
          priceQty: Number(priceQtyTransformed),
          imgSrc: action.payload.imgSrc,
          descriptionShort: action.payload.descriptionShort,
          brandName: action.payload.brandName,
        });
      }

      const dataCartItem = state.CartItems.map((key) => key.priceQty);
      dataCartItem.forEach((num) => {
        if( num ){
          return sumItems += Number(num.toFixed(2))    ;
        }
      });

      state.total = sumItems;
      state.cartLength = state.CartItems.length;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    updateQuantityProduct(state, action: PayloadAction<CartItems>) {
      let sumItems = 0;

      const itemIndex = state.CartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (sumItems >= 0 && state.CartItems[itemIndex].quantity >= 1) {
        state.CartItems[itemIndex].quantity = action.payload.quantity;
        state.CartItems[itemIndex].price = action.payload.price;
        let transformedPriceQty = (state.CartItems[itemIndex].quantity * state.CartItems[itemIndex].price).toFixed(2);
        state.CartItems[itemIndex].priceQty = Number(transformedPriceQty); 
      }

      const dataCartItem = state.CartItems.map((key) => key.priceQty);
      dataCartItem.forEach((num) => {
        if( num ){
          return sumItems += Number(num.toFixed(2))    ;
        }    
       });

      state.total = sumItems;
      state.cartLength = state.CartItems.length;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      let sumItems = 0;
      state.CartItems = state.CartItems.filter((key) => key.id !== action.payload.id);
      state.cartLength = state.CartItems.length;
      const dataCartItem = state.CartItems.map((key) => key.priceQty);
      dataCartItem.forEach((num) => {
        if( num ){
          return sumItems += Number(num.toFixed(2))    ;
        }    
       });

       state.total = sumItems;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    resetCart(state) {
      state.CartItems = [];
      state.cartLength = 0;
      state.total = 0;
      if (localStorage.getItem("cart")) {
        localStorage.removeItem("cart");
      }
    },
  },
});

export const { resetCart, addToCart, removeFromCart, updateQuantityProduct, showCartFromLocalstorage } = cartSlice.actions;

export default cartSlice.reducer;

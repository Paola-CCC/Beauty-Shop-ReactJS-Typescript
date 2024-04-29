import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItems } from "../../types/products.type";


interface CartState {
  cartItems: CartItems[],
  cartLength: number,
  total: number,
  devise: string,
  userId: number | null,
  date: string

}

const initialState: CartState = {
  cartItems: [],
  cartLength: 0,
  total: 0,
  devise: "EUR",
  userId: null,
  date: ''
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    showCartFromLocalstorage(state) {
      const localStorageData = localStorage.getItem("cart");      
      if (localStorageData) {
        const storage = JSON.parse(localStorageData);
        state.cartItems = storage?.cartItems;
        state.cartLength = storage?.cartLength;
        state.devise = storage?.devise;
        state.total = storage?.total;
      }
    },

    addToCart(state, action: PayloadAction< CartItems>) {
      let sumItems : number = 0;
      let quantityItems: number = 0;

      const findItemId = state.cartItems.find((key) => key.id === action.payload.id);

      if (findItemId && findItemId !== undefined) {
        const multiply = (findItemId.price * findItemId.quantity).toFixed(2);
        findItemId.quantity = action.payload.quantity;
        findItemId.price = action.payload.price;
        findItemId.priceQty = Number(multiply);
      } else {
        const priceQtyTransformed = (action.payload.quantity * action.payload.price).toFixed(2)
        state.cartItems.push({
          id: action.payload.id,
          quantity: action.payload.quantity,
          price: action.payload.price,
          priceQty: Number(priceQtyTransformed),
          thumbnail: action.payload.thumbnail,
          descriptionShort: action.payload.descriptionShort,
          brandName: action.payload.brandName,
        });
      }
  
      state.cartItems.map((itemsList) => {

        let price =  Number(itemsList.priceQty);
        sumItems += Number(price.toFixed(2));

        let quantity = Number(itemsList.quantity);
        quantityItems += quantity;

        return quantityItems;
      });

      state.total = sumItems;
      state.cartLength = quantityItems;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    updateQuantityProduct(state, action: PayloadAction< CartItems>) {
      let sumItems = 0;
      let quantityItems: number = 0;

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (sumItems >= 0 && state.cartItems[itemIndex].quantity >= 1) {
        state.cartItems[itemIndex].quantity = action.payload.quantity;
        state.cartItems[itemIndex].price = action.payload.price;
        let transformedPriceQty = (state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price).toFixed(2);
        state.cartItems[itemIndex].priceQty = Number(transformedPriceQty); 
      }

      state.cartItems.map((itemsList) => {

        let price =  Number(itemsList.priceQty);
        sumItems += Number(price.toFixed(2));

        let quantity = Number(itemsList.quantity);
        quantityItems += quantity;

        return quantityItems;
      });

      state.total = sumItems;
      state.cartLength = quantityItems;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      let sumItems = 0;
      let quantityItems: number = 0;
      state.cartItems = state.cartItems.filter((key) => key.id !== action.payload.id);

      state.cartItems.map((itemsList) => {

          let price =  Number(itemsList.priceQty);
          sumItems += Number(price.toFixed(2));

          let quantity = Number(itemsList.quantity);
          quantityItems += quantity;
          return quantityItems;
      });

       state.total = sumItems;
       state.cartLength = quantityItems;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    resetCart(state) {
      state.cartItems = [];
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

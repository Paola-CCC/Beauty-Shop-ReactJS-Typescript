import { PayloadAction, createSlice  } from "@reduxjs/toolkit";
import {  getproductList } from "./productsActions";
import { RootState } from "../store";
import { Products } from "../../types/products.type";

interface ProductsState {
  datas?: Products[],
  popularProducts: Products[],
  listFavoris: Products[],
  categories: string[],
  tags: string[],
  isLoading: boolean,
  isSuccess: boolean,
  errorMessage: string
}

const initialState: ProductsState = {
  datas: [],
  popularProducts: [],
  categories:[],
  listFavoris:[],
  tags: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: ''
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {

    handleStorage: (state) => {
      let localStorageFavoris = localStorage.getItem("favoris_product");      
      let productsFavoris = localStorageFavoris ? JSON.parse(localStorageFavoris): null ;
  
      if( productsFavoris) {
        state.listFavoris.push(...productsFavoris);
      }
    },
  
    toggleFavoris: (state, action: PayloadAction< Products>) => {
      
      const findFavorisById = state.listFavoris.find((key:any) => key.id === action.payload.id);

      if (findFavorisById && findFavorisById !== undefined ) {
        state.listFavoris = state.listFavoris.filter((key:any) => key.id !== action.payload.id)
      } else {
        state.listFavoris.push(action.payload);
      }

      localStorage.setItem('favoris_product', JSON.stringify(state.listFavoris))
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getproductList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getproductList.fulfilled, (state, action: PayloadAction< any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.datas = action.payload;
        const listCategories : any[] = [];
        const listTags : any[] = [];

        for (const element of action.payload) {
        
          if(!listCategories.includes(element?.categories)){
            listCategories.push(element?.categories);
          }
        
          element?.tags?.forEach((tag :any) => {
            if(!listTags.includes(tag)){
              listTags.push(tag);
            }
          });
        }

        state.categories = listCategories;
        state.tags = listTags;

      })
      .addCase(getproductList.rejected,(state,action: PayloadAction< any>) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })


      // .addCase(getPopularProductsList.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(getPopularProductsList.fulfilled, (state, action: PayloadAction< any>) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.popularProducts = action.payload;
      // })
      // .addCase(getPopularProductsList.rejected,(state,action: PayloadAction< any>) => {
      //   state.isLoading = false;
      //   state.isSuccess = false;
      //   state.errorMessage = action.payload;
      // });
  },
});

export const { toggleFavoris ,handleStorage } =  productsSlice.actions;

export const selectAllProducts = (state : RootState) => state.products.datas;
export const getProductIsSuccess = (state : RootState) => state.products.isSuccess;
export const getproductsErrorMessage = (state : RootState) => state.products.errorMessage;

export default productsSlice.reducer;

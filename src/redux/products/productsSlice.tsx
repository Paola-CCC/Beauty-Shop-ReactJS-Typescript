import { PayloadAction, createSlice  } from "@reduxjs/toolkit";
import { getPopularProductsList, getproductList } from "./productsActions";
import { RootState } from "../store";
import { Products } from "../../types/products.type";

interface ProductsState {
  datas?: Products[],
  popularProducts?: Products[],
  categories?: string[],
  tags?: string[],
  isLoading: boolean,
  isSuccess: boolean,
  errorMessage: any
}

const initialState: ProductsState = {
  datas: [],
  popularProducts: [],
  categories:[],
  tags: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: ''
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
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
          element?.categories?.forEach((value:any) => {
            if(!listCategories.includes(value)){
              listCategories.push(value);
            }
          });
        
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


      .addCase(getPopularProductsList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopularProductsList.fulfilled, (state, action: PayloadAction< any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.popularProducts = action.payload;
      })
      .addCase(getPopularProductsList.rejected,(state,action: PayloadAction< any>) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      });
  },
});

export const selectAllProducts = (state : RootState) => state.products.datas;
export const getProductIsSuccess = (state : RootState) => state.products.isSuccess;
export const getproductsErrorMessage = (state : RootState) => state.products.errorMessage;

export default productsSlice.reducer;

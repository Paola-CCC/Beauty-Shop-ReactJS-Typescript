import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductsService from "../../services/productsService";

export const getproductList = createAsyncThunk(
  'products/getproductList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ProductsService.getAll();
      return response.data;
    } catch (error :any) {
      return rejectWithValue(error.message);
    }
  }
);
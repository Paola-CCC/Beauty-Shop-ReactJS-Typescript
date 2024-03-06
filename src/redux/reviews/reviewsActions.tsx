import { createAsyncThunk } from "@reduxjs/toolkit";


export const getReviewsList = createAsyncThunk(
    'review/getReviewsList',
    async (_, { rejectWithValue }) => {
      try {
        // const response = await 
        return response.data;
      } catch (error : Error) {
        return rejectWithValue(error.message);
      }
    }
  );
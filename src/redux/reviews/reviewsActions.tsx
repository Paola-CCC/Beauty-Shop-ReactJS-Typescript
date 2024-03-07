import { createAsyncThunk } from "@reduxjs/toolkit";
import { reviewsService } from "../../services/reviewsService";


export const getReviewsList = createAsyncThunk(
    'reviews/getReviewsList',
    async (_, { rejectWithValue }) => {
      try {
        const response = await reviewsService.getAll();
        return response.data;
      } catch (error :any) {
        return rejectWithValue(error.message);
      }
    }
  );
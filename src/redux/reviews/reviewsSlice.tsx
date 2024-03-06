import { PayloadAction, createSlice  } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Reviews } from "../../types/reviews.type";
import { getReviewsList } from "./reviewsActions";

export interface ReviewsState {
  reviewsList: Reviews[]
  isLoading: boolean,
  isSuccess: boolean,
  errorMessage: string
}

const initialState: ReviewsState = {
  reviewsList: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: ''
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviewsList.fulfilled, (state, action: PayloadAction< any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reviewsList = action.payload;
      })
      .addCase(getReviewsList.rejected,(state,action: PayloadAction< any>) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      });
  },
});

export const selectAllReviews = (state : RootState) => state.reviews.reviewsList;

export const getReviewIsSuccess = (state : RootState) => state.reviews.isSuccess;

export const getReviewsErrorMessage = (state : RootState) => state.reviews.errorMessage;

export default reviewsSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import { UserAuth } from "../../types/user.type";




export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }: UserAuth
    , { rejectWithValue }) => {
    try {

      const { data } = await authService.register({  username, email, password });

      localStorage.setItem('userToken', data.token_JWT);
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);



export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: UserAuth, { rejectWithValue }) => {
    try {

      const { data } = await authService.login({ email, password });

      localStorage.setItem('userToken', data.token_JWT);
      return data
    } catch (error : any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

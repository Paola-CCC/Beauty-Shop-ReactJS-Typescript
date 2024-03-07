import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import { UserDatas } from "../../types/user.type";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (datas: UserDatas , { rejectWithValue }) => {
    try {
      const { data } = await authService.register(datas);
      const  userInfo = { userId : data?.id  , email: data.email}
      localStorage.setItem('userToken', JSON.stringify(userInfo));
      return data
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
  async ({ email, password }: UserDatas, { rejectWithValue }) => {
    try {

      const { data } = await authService.login({ email, password });
      const userInfo = { userId : data[0]?.id  , email: data[0].email};
      localStorage.setItem('userToken', JSON.stringify(userInfo));
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

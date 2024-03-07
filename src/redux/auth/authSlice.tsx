import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authActions";
import { loginUser } from "./authActions";


interface AuthState  {
  loading: boolean,
  userInfo: {} | any,
  userToken: null | string,
  error: null | any,
  success: boolean,
}

const initialState: AuthState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        // state.userToken = action.payload.userToken;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction< any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction< any>) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.userToken = action.payload.userToken;
      })
      .addCase(loginUser.rejected, (state,action: PayloadAction< any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;

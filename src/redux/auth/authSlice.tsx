import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authActions";
import { loginUser } from "./authActions";
import { UserDatas } from "../../types/user.type";


interface AuthState  {
  loading: boolean,
  userInfo: {} | any,
  error: null | any,
  success: boolean,
  isLogged: boolean
}

const initialState: AuthState = {
  loading: false,
  userInfo: {},
  error: null,
  success: false,
  isLogged: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    updateUserInfos(state ,action: PayloadAction<UserDatas>){
      state.userInfo = action.payload;
      state.isLogged = true;
    },

    showUserIsLogged(state) {
      if (localStorage.getItem("userToken")) {        
        state.isLogged = true;
      } else {
        state.isLogged = false;        
      }
    },

    logOutUser(state) {
      if (localStorage.getItem("userToken")) {        
        localStorage.removeItem("userToken");
        state.isLogged = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isLogged = false;

      })
      .addCase(registerUser.fulfilled, (state , action: PayloadAction<UserDatas>) => {
        state.loading = false;
        state.success = true;
        state.userInfo = action.payload;
        state.isLogged = true;

      })

      .addCase(registerUser.rejected, (state, action: PayloadAction< any>) => {
        state.loading = false;
        state.error = action.payload;
        state.isLogged = false;
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isLogged = false;

      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<UserDatas>) => {
        state.loading = false;
        state.success= true;
        state.userInfo = action.payload;
        state.isLogged = true;
      })
      .addCase(loginUser.rejected, (state,action: PayloadAction< any>) => {
        state.loading = false;
        state.error = action.payload;
        state.isLogged = false;

      });
  },
});

export const { showUserIsLogged ,logOutUser ,updateUserInfos } = authSlice.actions;


export default authSlice.reducer;

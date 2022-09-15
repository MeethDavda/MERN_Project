import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../api";

export const loginuser = createAsyncThunk("user/loginuser", async (data) => {
  try {
    // console.log("thunk", data);
    await loginUser(data);
    return;
  } catch (error) {
    console.log(error.message);
  }
});

const initialState = {
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [loginuser.fulfilled]: (state, action) => {
      state = action.payload;
    },
  },
});

export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../api";

export const loginuser = createAsyncThunk(
  "user/loginuser",
  async (data, thunkAPI) => {
    const { fulfillWithValue } = thunkAPI;
    try {
      const { user } = await loginUser(data);
      console.log("thunk", user);
      return fulfillWithValue(user);
    } catch (error) {
      console.log(error.message);
    }
  }
);

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

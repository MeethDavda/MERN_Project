import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";
import postSlice from "../Reducers/postSlice";
import userSlice from "../Reducers/userSlice";

export const store = configureStore({
  reducer: {
    post: postSlice,
    user: userSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import apiSlice from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    serach: searchReducer,
    api: apiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

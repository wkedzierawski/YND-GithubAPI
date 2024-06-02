import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import apiReducer from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    api: apiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

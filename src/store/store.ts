import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";

export const store = configureStore({
  reducer: {
    serach: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

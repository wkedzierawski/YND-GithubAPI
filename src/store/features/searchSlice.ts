import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const serachSlice = createSlice({
  name: "search",
  initialState: {
    searchValue: "",
  },
  reducers: {
    changeSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
  },
});

export const { changeSearchValue } = serachSlice.actions;

export default serachSlice.reducer;

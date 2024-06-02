import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
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

export const { changeSearchValue } = searchSlice.actions;

export default searchSlice.reducer;

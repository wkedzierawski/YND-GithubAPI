import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SearchUsersResponse } from "../../api/githubApi";

type APISlice = {
  username: string;
  users: SearchUsersResponse["data"]["items"];
};

type UpdateUsersPayload = PayloadAction<{
  username: APISlice["username"];
  users: APISlice["users"];
}>;

const initialState: APISlice = {
  username: "",
  users: [],
};

export const apiSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, { payload }: UpdateUsersPayload) => {
      state.users = payload.users;
      state.username = payload.username;
    },
  },
});

export const { updateUsers } = apiSlice.actions;

export default apiSlice.reducer;

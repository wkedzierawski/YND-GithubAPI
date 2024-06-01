import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GithubUser } from "../../api/GithubApi.types";

type APISlice = {
  username: string;
  users: GithubUser[];
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
    clearUsers: (state) => {
      state.username = "";
      state.users = [];
    },
  },
});

export const { updateUsers, clearUsers } = apiSlice.actions;

export default apiSlice.reducer;

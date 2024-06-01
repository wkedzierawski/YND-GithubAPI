import { Endpoints } from "@octokit/types";
import { ArrayElement } from "../utils/utils.types";

export type GithubUser = ArrayElement<
  Endpoints["GET /search/users"]["response"]["data"]["items"]
>;
export type SearchUsersResponse = {
  users: GithubUser[];
  username: string;
};

export type GithubRepository = ArrayElement<
  Endpoints["GET /users/{username}/repos"]["response"]["data"]
>;
export type UsersRepositoriesResponse = GithubRepository[];

import { Octokit } from "@octokit/core";
import { Endpoints } from "@octokit/types";
import { ArrayElement } from "../utils/utils";

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

export class GithubAPI {
  private static octokit = new Octokit({
    auth: import.meta.env.VITE_API_TOKEN,
  });

  public static searchUsers = async (username: string, limit: number) => {
    try {
      const response = await this.octokit.request("GET /search/users", {
        q: username,
        per_page: limit,
      });
      return { users: response.data.items, username };
    } catch (error) {
      return { users: [], username };
    }
  };

  public static getUserRepositories = async (username: string) => {
    try {
      const response = await this.octokit.request(
        "GET /users/{username}/repos",
        {
          username,
        }
      );

      return response.data;
    } catch (error) {
      return [];
    }
  };
}

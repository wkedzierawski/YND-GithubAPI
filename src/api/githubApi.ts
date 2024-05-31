import { Octokit } from "@octokit/core";
import { Endpoints } from "@octokit/types";

export type SearchUsersResponse = Endpoints["GET /search/users"]["response"];

export class GithubAPI {
  private static octokit = new Octokit({
    auth: import.meta.env.VITE_API_TOKEN,
  });

  public static searchUsers = async (username: string) => {
    try {
      const response = await this.octokit.request("GET /search/users", {
        q: username,
      });
      return { users: response.data.items, username };
    } catch (error) {
      return { users: [], username };
    }
  };
}

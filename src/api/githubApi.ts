// import { Octokit } from "@octokit/core";

// export class GithubAPI {
//   private static octokit = new Octokit({
//     auth: import.meta.env.VITE_API_TOKEN,
//   });

//   public static searchUsers = async (username: string, limit: number) => {
//     try {
//       const response = await this.octokit.request("GET /search/users", {
//         q: username,
//         per_page: limit,
//       });
//       return { users: response.data.items, username };
//     } catch (error) {
//       return { users: [], username };
//     }
//   };

//   public static getUserRepositories = async (username: string) => {
//     try {
//       const response = await this.octokit.request(
//         "GET /users/{username}/repos",
//         {
//           username,
//         }
//       );

//       return response.data;
//     } catch (error) {
//       return [];
//     }
//   };
// }

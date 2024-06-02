import { useEffect, useState } from "react";
import { GithubRepository } from "./GithubApi.types";
import { useToggle } from "../hooks";
import { GithubAPI } from "./GithubApi";

export const useUserRepositories = (username: string) => {
  const [userRepositories, setUserRepositories] = useState<GithubRepository[]>(
    []
  );
  const [loading, startLoading, finishLoading] = useToggle(false);

  useEffect(() => {
    startLoading();
    GithubAPI.getUserRepositories(username)
      .then(setUserRepositories)
      .finally(finishLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return { userRepositories, loading };
};

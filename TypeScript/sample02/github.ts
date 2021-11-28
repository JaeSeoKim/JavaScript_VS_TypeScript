import axios from "axios";
import { UserReposData, UserResposParameters } from "./types";

const GITHUB_API = "https://api.github.com";

const GITHUB_HEADER = {
  Accept: "application/vnd.github.v3+json",
};

export async function getUserRepos(
  username: string,
  options: UserResposParameters
) {
  return await axios.get<UserReposData[]>(
    `${GITHUB_API}/users/${username}/repos`,
    {
      params: options,
      headers: GITHUB_HEADER,
    }
  );
}

function printInfo(key: string, value: string | number | string[]) {
  console.log(`${key} :`, value);
}

export function printRepo(repo: UserReposData) {
  printInfo("name", repo.name);
  printInfo("full_name", repo.full_name);
  repo.description && printInfo("description", repo.description);
  repo.language && printInfo("language", repo.language);
  repo.stargazers_count && printInfo("stargazers_count", repo.stargazers_count);
  repo.topics && printInfo("topics", repo.topics);
  console.log("=============================================");
}

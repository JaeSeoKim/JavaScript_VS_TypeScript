import axios from "axios";

const GITHUB_API = "https://api.github.com";

const GITHUB_HEADER = {
  Accept: "application/vnd.github.v3+json",
};

export async function getUserRepos(
  username,
  /**
   * @see https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
   */
  options
) {
  return await axios.get(`${GITHUB_API}/users/${username}/repos`, {
    params: options,
    headers: GITHUB_HEADER,
  });
}

function printInfo(key, value) {
  console.log(`${key} :`, value);
}

export function printRepo(repo) {
  printInfo("name", repo.name);
  printInfo("full_name", repo.full_name);
  printInfo("description", repo.description);
  printInfo("language", repo.language);
  printInfo("stargazers_count", repo.stargazers_count);
  printInfo("topics", repo.topics);
  console.log("=============================================");
}

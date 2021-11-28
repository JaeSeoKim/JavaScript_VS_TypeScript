import { readlineQuestionSync } from "./readline-sync.js";
import { getUserRepos, printRepo } from "./github.js";

async function main() {
  const userName = await readlineQuestionSync("Insert Github UserName : ");

  try {
    const { data: repos } = await getUserRepos(userName, {
      type: "all",
      sort: "created",
      per_page: "10",
    });

    repos.forEach((repo) => {
      printRepo(repo);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
}

main();

const axios = require("axios");

const USER_NAME = "JaeSeoKim";

function printInfo(key, value) {
  console.log(`${key} :`, value);
}

function printUserInfo(info) {
  printInfo("id", info.id);
  printInfo("followers", info.followers);
  printInfo("following", info.following);
  printInfo("bio", info.bio);
  printInfo("name", info.name);
  printInfo("blog", info.blog);
  printInfo("email", info.email);
  printInfo("company", info.company);
}

async function main() {
  console.log(`Hello ${USER_NAME}!`);
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${USER_NAME}`,
      {
        headers: { Accept: "application/vnd.github.v3+json" },
      }
    );
    printUserInfo(data);
  } catch (error) {
    console.log(error.message);
  }
}

main();

import axios from "axios";
import type { Endpoints } from "@octokit/types";

export declare type SetIntersection<A, B> = A extends B ? A : never;

type UserResponse = Endpoints["GET /users/{username}"]["response"];

type UserData = SetIntersection<
  UserResponse,
  {
    status: 200;
  }
>["data"];

const USER_NAME = "JaeSeoKim";

function printInfo(key: string, value: string | number) {
  console.log(`${key} :`, value);
}

function printUserInfo(info: UserData) {
  printInfo("id", info.id);
  printInfo("followers", info.followers);
  printInfo("following", info.following);
  info.bio && printInfo("bio", info.bio);
  info.name && printInfo("name", info.name);
  info.blog && printInfo("blog", info.blog);
  info.email && printInfo("email", info.email);
  info.company && printInfo("company", info.company);
}

async function main() {
  console.log(`Hello ${USER_NAME}!`);
  try {
    const { data } = await axios.get<UserData>(
      `https://api.github.com/users/${USER_NAME}`,
      {
        headers: { Accept: "application/vnd.github.v3+json" },
      }
    );
    printUserInfo(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      if (error.response) {
        console.log(error.response.data);
      }
    } else if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
}

main();

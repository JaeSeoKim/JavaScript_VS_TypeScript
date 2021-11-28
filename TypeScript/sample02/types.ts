import type { Endpoints } from "@octokit/types";

export declare type SetIntersection<A, B> = A extends B ? A : never;

export type UserReposResponse =
  Endpoints["GET /users/{username}/repos"]["response"];

export type UserResposParameters = Omit<
  Endpoints["GET /users/{username}/repos"]["parameters"],
  "username"
>;

export type UserReposData = SetIntersection<
  UserReposResponse,
  {
    status: 200;
  }
>["data"][0];

# JavaScript VS TypeScript

> JavaScript 코드와 TypeScript 코드를 작성 후 상호 분석합니다.

## Sample01

> Github User API를 이용하여 유저에 대한 간단한 정보를 출력 하는 프로그램

- [JavaScript ver](./JavaScript/sample01/)

```text
// OUTPUT
Hello JaeSeoKim!
id : 48559454
followers : 176
following : 181
bio : 🌱 I am a student developer studying in 42Seoul.
name : JaeSeoKim
blog : https://about.jaeseokim.dev/
email : null
company : 42Seoul(@innovationacademy-kr)
```

코드의 양은 간결하나, 응답값에 대한 Type를 확실 할 수 없기 때문에 문서와 응답값에 의존하여 개발을 진행하게 됨, 그에 따른 위와 같은 `email` 이 `null` 인 예외 상황을 제대로 검증하지 못함

- [TypeScript ver](./TypeScript/sample01/)

```text
// OUTPUT
Hello JaeSeoKim!
id : 48559454
followers : 176
following : 181
bio : 🌱 I am a student developer studying in 42Seoul.
name : JaeSeoKim
blog : https://about.jaeseokim.dev/
company : 42Seoul(@innovationacademy-kr)
```

JavaScript 버전에 비해 Type에 대한 정확한 정보를 알고 있기 때문에 Type를 제대로 검증하여 출력 하는 로직을 추가할 수 있으며, 개발시에 이미 Type를 정의 하였기 때문에 추가적으로 문서를 살펴볼 필요가 없이 해당 객체의 Type를 이용하여 손쉽게 작성 가능.

단점은 TypeScript를 실행하기 위해서는 JS로 Compile 하는 과정이 필요하므로, `ts-node`, `tsc` 를 이용하여 사용하여야 함.

## Sample02

> Github User API를 이용하여 입력받은 유저의 레포 정보를 출력 하는 프로그램

- [JavaScript ver](./JavaScript/sample02/)

```javascript
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
```

내부에서 사용되는 `getUserRepos` 를 보게 되면 Github Rest API에서 요구하는 추가 URL params를 옵션으로 받는 것을 확인 할 수 있음.

```javascript
  const { data: repos } = await getUserRepos(userName, {
    type: "all",
    sort: "created",
    per_page: "10",
  });
```

하지만 위와 같이 사용하는 해당 함수를 사용하는 입장에서는 해당 객체에서 원하는 형태가 어떤 형태인지 모르기 때문에 주석으로 달려져 있는 문서를 참고 하여 사용하게 되고 이때 개발시에 오타가 발생하여도 검증작업이 없으므로 실제 작동 직전까지는 문제점을 확인 할 수 없음.

- [TypeScript ver](./TypeScript/sample02/)

```typescript
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
```

기존 JavaScript 로 작성된 것과 달리 `options` 에 대한 정확한 type를 지정하였기 때문에 IDE의 도움을 받아 쉽게 자동완성이 되고 개발시 잘 못 사용한 경우에 대해 컴파일 시점에 정확하게 알 수 있음.

```typescript
  const { data: repos } = await getUserRepos(userName, {
    type: "all",
    sort: "created",
    // (property) sort?: "created" | "updated" | "pushed" | "full_name" | undefined
    per_page: 10,
  });
```

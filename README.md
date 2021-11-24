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

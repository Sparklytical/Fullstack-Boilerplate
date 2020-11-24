# 1. Backend

- [1. Backend](#1-backend)
  - [1.1. How to use example mutation](#11-how-to-use-example-mutation)
  - [1.2. Example ENV](#12-example-env)

## 1.1. How to use example mutation

```graphql
mutation Register{
  register(
    options: { email: "bob@bob.com", username: "bob", password: "bob" }
  ) {
    errors {
      field
      message
    }
    user {
      id
      email
}
```

## 1.2. Example ENV

```env
DB_NAME=infinity
DB_PASSWORD=postgres
DB_PORT=5432
DB_ORIGIN_URL=https://localhost:3000
COOKIE_NAME=qid2
COOKIE_SECRET=asjdhasdhaslkdhasldk
PORT=4000
```

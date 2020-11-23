# How to use example mutation

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
      username
    }
  }
}
```

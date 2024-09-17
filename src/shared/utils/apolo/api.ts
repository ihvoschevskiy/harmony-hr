import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query {
    myProfile {
      id
      name
      avatar
    }
  }
`;

export const LOGIN = gql`
  mutation {
    login(email: "john@mail.com", password: "changeme") {
      access_token
      refresh_token
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($token: String!) {
    refreshToken(refreshToken: $token) {
      access_token
      refresh_token
    }
  }
`;

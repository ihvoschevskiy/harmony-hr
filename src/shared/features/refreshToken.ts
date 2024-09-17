import { gql } from "@apollo/client";

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($token: String!) {
    refreshToken(refreshToken: $token) {
      access_token
      refresh_token
    }
  }
`;

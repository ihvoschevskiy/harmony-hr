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

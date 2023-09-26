import { gql } from 'apollo-angular';

export const GET_CEO = gql`
  query GET_CEO {
    company {
      ceo
    }
  }
`;

export const GET_ALL_CAPSULES = gql`
  query GET_ALL_CAPSULES($offset: Int, $limit: Int) {
    capsules(limit: $limit, offset: $offset) {
      id
      landings
      missions {
        flight
        name
      }
      original_launch
      reuse_count
      status
      type
    }
  }
`;

export const GET_CAPSULE = gql`
  query GET_CAPSULE($capsuleId: ID!) {
    capsule(id: $capsuleId) {
      id
      status
    }
  }
`;

import gql from 'graphql-tag';

export const getFilms = gql`
  {
    films {
      id,
      name,
      artwork,
      year,
      createdAt
    }
  }
`;
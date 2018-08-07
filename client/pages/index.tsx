import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const getFilms = gql`
  {
    films {
      id,
      name,
      artwork,
      createdAt
    }
  }
`

export default () =>(
  <Query query={getFilms}>
  {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.films.map(({ id, name, artwork, createdAt }) => (
        <div key={id}>
          <img src={artwork} alt={name} />
          <p>{name}</p>
          <p>{createdAt}</p>
        </div>
      ));
    }}
  </Query>
)
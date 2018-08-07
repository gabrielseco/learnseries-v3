import React from 'react';
import { Query } from 'react-apollo';
import { Layout } from 'containers';
import { getFilms } from './../globals/queries';

export default () => (
  <Layout>
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
  </Layout>
);
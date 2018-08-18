import React from 'react';
import { Query } from 'react-apollo';
import { Layout } from 'containers';
import { getFilms } from 'globals/queries';
import { List } from 'components';

export default () => (
  <React.StrictMode>
    <Layout>
      <button>Add Film</button>
      <Query query={getFilms}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return <List items={data.films} />;
        }}
      </Query>
    </Layout>
  </React.StrictMode>
);

import React from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

// Components
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import AddAuthor from './components/AddAuthor';

// Apollo Client Settings

const client = new ApolloClient({
  uri: 'http://app-99078178-d7ca-4ac8-85c8-b1916f335575.cleverapps.io/graphql'
});




function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
      <h1>Ninja´s Reading list</h1>
      <BookList />
      <AddBook />
      <AddAuthor />
      </div>
    </ApolloProvider>
  );
}

export default App;

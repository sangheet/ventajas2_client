import React from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

// Components
import ProductList from './components/ProductList';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import AddAuthor from './components/AddAuthor';

// Apollo Client Settings

const client = new ApolloClient({
  //uri: 'http://app-99078178-d7ca-4ac8-85c8-b1916f335575.cleverapps.io/graphql'  // cloud
   uri: 'http://localhost:8080/graphql'  // Local
});




function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
      <h1>Productos / Ventajas 2</h1>
      <ProductList />
      <AddBook />
      <AddAuthor />
      </div>
    </ApolloProvider>
  );
}

export default App;

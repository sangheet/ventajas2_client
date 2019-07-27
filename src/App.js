import React from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

// Components
import ProductList from './components/ProductList';
 import AddProduct from './components/AddProduct';


// Apollo Client Settings

const client = new ApolloClient({
  uri: 'http://app-99078178-d7ca-4ac8-85c8-b1916f335575.cleverapps.io/graphql'  // cloud

  // uri: 'http://localhost:8080/graphql'  // Local
  // uri: 'http://172.22.0.3/graphql'  
   
});




function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
      <h1>Productos / Ventajas 2</h1>
      <ProductList />
      <AddProduct />
      </div>
    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";


// Components
import ProductList from './components/ProductList';
import Menu from './components/menu';
import BottomMenu from './components/bottomMenu';
import CatList from "./components/CatList"

 // Darkmode
/*  import Darkmode from 'darkmode-js';

 var options = {
  bottom: '30px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget(); */


// Apollo Client Settings

const client = new ApolloClient({
  //uri: 'http://app-99078178-d7ca-4ac8-85c8-b1916f335575.cleverapps.io/graphql'  // cloud
   uri: 'http://192.168.1.59:4000/graphql'  // Local
   //uri: 'http://172.22.0.3/graphql'
});



function Product() {

  return (
    <ApolloProvider client={client}>
      <div id="main">
      <h3 className="product-title">Gestión de Productos</h3>
      <CatList />
      <BottomMenu />
      </div>
      <Menu/>
    </ApolloProvider>
  );
}

export default Product;

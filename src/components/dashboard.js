import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProductsQuery } from '../queries/queries';


// components
import ProductDetails from './ProductDetails';
import BotomMenu from './bottomMenu';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }

    render(){
        return(
            <div>

                <div id="book-list">
                  <h3 className="product-title">Bienvenido a Ventajas</h3>
                <div className="card1">
                    <h4>Bienvenido</h4>
                    <p>Acceso a información de usuario</p>
                </div>
                </div>
            </div>
        );
    }
}

export default graphql(getProductsQuery)(Dashboard);
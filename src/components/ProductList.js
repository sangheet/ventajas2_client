import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProductsQuery } from '../queries/queries';

// components
import ProductDetails from './ProductDetails';

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayProducts(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading products...</div> );
        } else {
            return data.products.map(product => {
                return(
                    <tr className="table" key={ product.id } onClick={ (e) => this.setState({ selected: product.id }) }>{ product.nombre }</tr>
                );
            })
        }
    }
    render(){
        return(
            <div>
                <table id="product-list">
                    { this.displayProducts() }
                </table>
                <ProductDetails productId={ this.state.selected } />
            </div>
        );
    }
}

export default graphql(getProductsQuery)(ProductList);
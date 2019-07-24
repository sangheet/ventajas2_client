import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProductQuery } from '../queries/queries';

class ProductDetails extends Component {
    displayProductDetails(){
        const { product } = this.props.data;
        if(product){
            return(
                <div>
                    <h2>{ product.nombre }</h2>
                    <p>{ product.precio }</p>
                    <p>{ product.categoria }</p>
                    <p>{ product.plan }</p>
                    <p>{ product.modalidad }</p>
                    <p>{ product.canal}</p>
                </div>
            );
        } else {
            return( <div>No Product selected...</div> );
        }
    }
    render(){
        return(
            <div id="product-details">
                { this.displayProductDetails() }
            </div>
        );
    }
}

export default graphql(getProductQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.productId
            }
        }
    }
})(ProductDetails);
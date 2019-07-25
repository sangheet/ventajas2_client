import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProductQuery } from '../queries/queries';

class ProductDetails extends Component {
    displayProductsDetails(){
        const { product } = this.props.data;
        if(product){
            return(
                <div>
                    <h2>Producto:  { product.nombre }</h2>
                    <p>Precio:  { product.precio }</p>
                    <p>Plan:    { product.plan }</p>
                    <p>Modalidad:   { product.modalidad }</p>
                    <p>Canal:   { product.canal}</p>
                    <p>Categoría: { product.categoryId.name}</p>
                </div>
            );
        } else {
            return( <div>No Product selected...</div> );
        }
    }
    render(){
        return(
            <div id="product-details">
                { this.displayProductsDetails() }
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
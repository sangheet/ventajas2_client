import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProductQuery } from '../queries/queries';


class ProductDetails extends Component {
    displayProductsDetails(){
        const { product } = this.props.data;
        if(product){
            return(
                <div>
                    <h2>Nombre: { product.nombre }</h2>
                    <h3>Categoría: { product.categoryId.name}</h3>
                    <h3>Precio:  { product.precio }</h3>
                    <h3>Plan:    { product.plan }</h3>
                    <h3>Modalidad:   { product.modalidad }</h3>
                    <h3>Canal:   { product.canal}</h3>
                    
                </div>
            );
        } else {
            return( <div>No se ha seleccionado ningún producto...</div> );
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
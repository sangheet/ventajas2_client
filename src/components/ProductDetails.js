import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProductQuery } from '../queries/queries';


class ProductDetails extends Component {
    displayProductsDetails(){
        var data = this.props.data;
        const { product } = this.props.data;
        if(data.loading){
            return( <div className="loader"><img src="https://i.imgur.com/owmojne.gif" alt="Cargando"/></div> );
        };
        if(product){
            return(
                <div>
                    <div className="product-title"><h2>{ product.nombre }</h2></div>
                    <h3>Categoría: { product.categoryId.name}</h3>
                    <h3>Precio: S/{ product.precio }</h3>
                    <h3>Plan:    { product.planId.name }</h3>
                    <h3>Modalidad:   { product.modalidad }</h3>
                    <h3>Canal:   { product.canal}</h3>
                </div>
            );
        } else {
            return( <div><h3>Seleccione un producto a la izquierda para ver detalles...</h3></div> );
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
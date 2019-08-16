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
                    <div><h3 className="product-title">{ product.nombre }</h3></div>
                    <h4>Categoría: { product.categoryId.name}</h4>
                    <h4>Precio: S/{ product.precio }</h4>
                    <h4>Plan:    { product.planId.name }</h4>
                    <h4>Modalidad:   { product.modalidad }</h4>
                    <h4>Canal:   { product.canal}</h4>
                </div>
            );
        } else {
            return( <div><h3>Seleccione un producto para ver detalles...</h3></div> );
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
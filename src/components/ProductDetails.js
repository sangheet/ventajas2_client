import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getProductsQuery, getProductQuery, removeProductMutation } from '../queries/queries';


class ProductDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: ""
        };

    }

    submitForm(e){
        e.preventDefault()
        this.props.removeProductMutation({
            variables: {
                id: this.state.id
            },
            refetchQueries: [{ query: getProductsQuery }],
        });
    }

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
    deleteProducts(){
        const { product } = this.props.data;
        if(product){
            return(
                <div key={ product.id }><form onSubmit={ this.submitForm.bind(this) }><button>Eliminar Producto ({product.id})</button></form></div>
                     ); 
    }}
    render(){
        return(
            <div id="product-details">
                { this.displayProductsDetails() }
                { this.deleteProducts() }
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
},
removeProductMutation, {
    options: (props) => {
        return {
            variables: {
                id: props.productId
            }
        }
    }
})(ProductDetails,removeProductMutation);



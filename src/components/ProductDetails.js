import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProductQuery } from '../queries/queries';




class ProductDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
        };

    }

    submitForm(e){
        e.preventDefault();
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
                    <p>Id:   { product.id}</p>
                    <div>
                    <form onSubmit={this.submitForm.bind(this)}>
                        <button type="submit" value= { product.id } onClick={(e) => this.setState({id: e.target.value})} className="button-3 btn btn-secondary">Eliminar Producto</button>
                    </form></div>
                </div>
            );
        } else {
            return( <div><h3>Seleccione un producto para ver detalles...</h3></div> );
        }
    }

    render(){
        return(
           <div> <div id="product-details">
                { this.displayProductsDetails() }
                </div>
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



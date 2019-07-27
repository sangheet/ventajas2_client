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
    displayProduct(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading Products...</div> );
        } else {
            return data.products.map(product => {
                return(
                    
            <div className="table" key={ product.id } onClick={ (e) => this.setState({ selected: product.id }) }><h4>{ product.nombre }</h4><div className="item-cat">Categoría: { product.categoryId}</div></div>
                   
                 ); 
           }
           )
            
        }
    }
    render(){
        return(
            <div>
                <div id="book-list">
                    { this.displayProduct() }
                </div>
                <ProductDetails productId={ this.state.selected } />
            </div>
        );
    }
}

export default graphql(getProductsQuery)(ProductList);
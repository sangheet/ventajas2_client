import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addProductMutation, getProductsQuery, getCategoriesQuery } from '../queries/queries';

class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            precio: '',
            categoryId: '',
            plan: '',
            modalidad: '',
            canal: ''
        };
    }
    displayCategories(){
        var data = this.props.getCategoriesQuery;
        if(data.loading){
            return( <option disabled>Loading Categories</option> );
        } else {
            return data.categories.map(category => {
                return( <option key={ category.id } value={category.id}>{ category.name }</option> );
            });
        }
    }
   
    submitForm(e){
        e.preventDefault()
        this.props.addProductMutation({
            variables: {
                nombre: this.state.nombre,
                precio: this.state.precio,
                categoryId: this.state.categoryId,
                plan: this.state.plan,
                modalidad: this.state.modalidad,
                canal: this.state.canal
            },
            refetchQueries: [{ query: getProductsQuery }]
        });
    }
    render(){
        return(
            <form name="myForm" id="add-book" onSubmit={ this.submitForm.bind(this) } >
                <div className="field">
                    <label>Nombre del producto:</label>
                    <input type="text" onChange={ (e) => this.setState({ nombre: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Precio:</label>
                    <input type="text" onChange={ (e) => this.setState({ precio: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Categoría:</label>
                    <select onChange={ (e) => this.setState({ categoryId: e.target.value }) } >
                        <option>Seleccione Categoría</option>
                        { this.displayCategories() }
                    </select>
                </div>
                <div className="field">
                    <label>Plan:</label>
                    <input type="text" onChange={ (e) => this.setState({ plan: e.target.value }) } />
                </div>
                <div className="field">
                    <label>modalidad:</label>
                    <input type="text" onChange={ (e) => this.setState({ modalidad: e.target.value }) } />
                </div>
                <div className="field">
                    <label>canal:</label>
                    <input type="text" onChange={ (e) => this.setState({ canal: e.target.value }) } />
                </div>
               
                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(getCategoriesQuery, { name: "getCategoriesQuery" }),
    graphql(addProductMutation, { name: "addProductMutation" })
)(AddProduct);
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addProductMutation, getProductsQuery, getCategoriesQuery } from '../queries/queries';
import AddCategory from './AddCategory';

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
            <div>
            <form name="add-book" id="add-book" onSubmit={ this.submitForm.bind(this) } >
                <h4>+  AGREGAR PRODUCTO</h4>
                <div className="field">
                    <label>Nombre del producto:</label>
                    <input required={true} name="nombre" type="text" onChange={ (e) => this.setState({ nombre: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Precio:</label>
                    <input required={true} type="text" name="precio" onChange={ (e) => this.setState({ precio: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Categoría:</label>
                    <select required={true} onChange={ (e) => this.setState({ categoryId: e.target.value }) } >
                        <option name="categoria" value="">Seleccione Categoría</option>
                        { this.displayCategories() }
                    </select>
                </div>
                <div className="field">
                    <label>Plan:</label>
                    <input name="plan" type="text" onChange={ (e) => this.setState({ plan: e.target.value }) } />
                </div>
                <div className="field">
                    <label>modalidad:</label>
                    <input name="modalidad" type="text" onChange={ (e) => this.setState({ modalidad: e.target.value }) } />
                </div>
                <div className="field">
                    <label>canal:</label>
                    <input name="canal" type="text" onChange={ (e) => this.setState({ canal: e.target.value }) } />
                </div>
               
                <button className="button">+</button>
            </form><AddCategory /></div>
            
        );
    }
}

export default compose(
    graphql(getCategoriesQuery, { name: "getCategoriesQuery" }),
    graphql(addProductMutation, { name: "addProductMutation" })
)(AddProduct);
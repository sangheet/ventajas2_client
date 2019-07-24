import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addProductMutation, getProductsQuery } from '../queries/queries';

class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            precio: '',
            categoria: '',
            plan: '',
            modalidad: '',
            canal: ''
        };
    }
    submitForm(e){
        e.preventDefault()
        // use the addBookMutation
        this.props.addProductMutation({
            variables: {
                nombre: this.state.nombre,
                precio: this.state.precio,
                categoria: this.state.categoria,
                plan: this.state.plan,
                modalidad: this.state.modalidad,
                canal: this.state.canal
            },
            refetchQueries: [{ query: getProductsQuery }]
        });
    }
    render(){
        return(
            <form id="add-book" onSubmit={ this.submitForm.bind(this) } >
                <div className="field">
                    <label>Nombre del producto:</label>
                    <input type="text" onChange={ (e) => this.setState({ nombre: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Precio:</label>
                    <input type="text" onChange={ (e) => this.setState({ precio: e.target.value }) } />
                </div>
                <div className="field">
                    <label>categoria:</label>
                    <input type="text" onChange={ (e) => this.setState({ categoria: e.target.value }) } />
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
    graphql(addProductMutation, { name: "addProductMutation" })
)(AddProduct);
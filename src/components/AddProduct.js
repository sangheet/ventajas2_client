import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addProductMutation, getProductsQuery, getCategoriesQuery, getPlansQuery } from '../queries/queries';



// components




class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            precio: '',
            categoryId: '',
            planId: '',
            modalidad: '',
            canal: '',
        };

    }


    displayCategories(){
        var data = this.props.getCategoriesQuery;
        if(data.loading){
            return( <option disabled>Cargando Categorías</option> );
        } 
        if (data.error){
            return( <option disabled>No se pudieron cargar las categorías</option> );
        }   else {
            return data.categories.map(category => {
                return( <option key={ category.id } value={category.id}>{ category.name }</option> );
            });
        }
    }
    displayPlans(){
        var data = this.props.getPlansQuery;
        if(data.loading){
            return( <option disabled>Cargando planes</option> );
            
        }
        if (data.error){
            return( <option disabled>No se pudieron cargar los planes</option>);
        }
        else {
            return data.plans.map(plan => {
                return( <option key={ plan.id } value={plan.id}>{ plan.name }</option> );
            });
        }
        
    }
    openModal() {
        this.setState({
            visible : true,
        });
    }

    closeModal() {
        this.setState({
            visible : false,
        });
    }

    submitForm(e){
        e.preventDefault()
        this.props.addProductMutation({
            variables: {
                nombre: this.state.nombre,
                precio: this.state.precio,
                categoryId: this.state.categoryId,
                planId: this.state.planId,
                modalidad: this.state.modalidad,
                canal: this.state.canal,
            },
            refetchQueries: [{ query: getProductsQuery }],
        });
    }
    render(){
            
        return(
            <div>
            <form name="add-book" id="add-book" onSubmit={ this.submitForm.bind(this) } >
                <h4>+  AGREGAR PRODUCTO</h4>
                <div className="field">
                    <label>* Nombre:</label>
                    <input required={true} name="nombre" type="text" onChange={ (e) => this.setState({ nombre: e.target.value }) } />
                </div>

                <div className="field">
                    <label>* Precio:</label>
                    <input required={true} type="text" name="precio" onChange={ (e) => this.setState({ precio: e.target.value }) } />
                </div>
                <div className="field">
                    <label>* Categoría:</label>
                    <select required={true} onChange={ (e) => this.setState({ categoryId: e.target.value }) } >
                        <option name="categoria" value="">Seleccione Categoría</option>
                        { this.displayCategories() }
                    </select>
                </div>
                <div className="field">
                    <label>* Plan:</label>
                    <select onChange={ (e) => this.setState({ planId: e.target.value }) } >
                        <option name="plan" value="">Seleccione Plan</option>
                        { this.displayPlans() }
                    </select>
                </div>
                <div className="field">
                    <label>modalidad:</label>
                    <input name="modalidad" type="text" onChange={ (e) => this.setState({ modalidad: e.target.value }) } />
                </div>
                <div className="field">
                    <label>canal:</label>
                    <input name="canal" type="text" onChange={ (e) => this.setState({ canal: e.target.value }) } />
                </div>
                
               
                <button className="btn btn-secondary"> Agregar</button>
            </form>  
            </div>
            
        )
    }
}

export default compose(
    graphql(getPlansQuery, { name: "getPlansQuery" }),
    graphql(getCategoriesQuery, { name: "getCategoriesQuery" }),
    graphql(addProductMutation, { name: "addProductMutation" })
)(AddProduct);
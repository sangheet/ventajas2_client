import React from 'react';
import { graphql, compose } from 'react-apollo';
import { Component } from 'react';
import {getCategoriesQuery, addCategoryMutation} from "../queries/queries";

class AddCategory extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:"",
        };
    }
    submitForm(e){
        e.preventDefault();
        this.props.addCategoryMutation({
            variables: {
                name: this.state.name,
            },
            refetchQueries: [{query: getCategoriesQuery}],
        });
    }


    render(){
  return (
      <div>
    <form className="add-author" id="add-author" onSubmit={this.submitForm.bind(this)}>
        
        
            <label>Nueva Categoría:</label>
            <input required={true} type="text" onChange={(e) => this.setState({name: e.target.value})} />
            <button className="button-3">+</button><div className="field">
        </div>
        
    </form></div>
  )
}
}

export default compose (
    graphql(getCategoriesQuery, {name: "getCategoriesQuery"}),
    graphql(addCategoryMutation, {name: "addCategoryMutation"}),
)(AddCategory);
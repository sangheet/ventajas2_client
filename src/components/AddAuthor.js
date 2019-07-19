import React from 'react';
import { graphql, compose } from 'react-apollo';
import { Component } from 'react';
import {getAuthorsQuery, addAuthorMutation} from "../queries/queries";

class AddAuthor extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:"",
            age:"",
        };
    }
    submitForm(e){
        e.preventDefault();
        this.props.addAuthorMutation({
            variables: {
                name: this.state.name,
                age: this.state.age,
            },
            refetchQueries: [{query: getAuthorsQuery}]
        });
    }

    render(){
  return (
    <form className="add-author" id="add-author" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
            <label>New Author Name:</label>
            <input type="text" onChange={(e) => this.setState({name: e.target.value})} />
        </div>
        <div className="field">
            <label>Age:</label>
            <input type="text" onChange={(e) => this.setState({age: e.target.value})} />
        </div>
        <button>+</button>
    </form>
  )
}
}

export default compose (
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addAuthorMutation, {name: "addAuthorMutation"}),
)(AddAuthor);
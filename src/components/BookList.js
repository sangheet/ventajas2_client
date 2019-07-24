import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

// components
import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayBooks(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading books...</div> );
        } else {
            return data.books.map(book => {
                return(
                    <tr className="table" key={ book.id } onClick={ (e) => this.setState({ selected: book.id }) }>{ book.name }</tr>
                );
            })
        }
    }
    render(){
        return(
            <div>
                <table id="book-list">
                    { this.displayBooks() }
                </table>
                <BookDetails bookId={ this.state.selected } />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
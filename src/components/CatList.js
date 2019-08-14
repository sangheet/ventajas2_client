import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCategoriesQuery } from '../queries/queries';

// components


class CatList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayCats(){
        var data = this.props.data;
       
        if(data.loading){
            return( <div><img src="https://loading.io/spinners/flickr/lg.orbit-balls-loading-gif.gif" alt="Cargando"/></div> );
        }
         if (data.error){
            return( <div><h3>Atención: Ocurrió un error al consultar la base de datos.</h3> <br/><p>Detalles: "{data.error.message}"</p></div> );
        }
         else {
            return data.categories.map(category => {
                return(
            <div className="table" key={ category.id } onClick={ (e) => this.setState({ selected: category.id }) }><h4>{ category.name }</h4>               </div>
                    ); 
           }
           )
            
        }
    }

    render(){
        return(
            <div>

                <div id="book-list">
                  <div><h2>Categorías</h2></div>
                    { this.displayCats() }
                </div>
                
            </div>
        );
    }
}

export default graphql(getCategoriesQuery)(CatList);
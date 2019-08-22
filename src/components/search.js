import React, { Component } from 'react';


class Search extends Component {
    
    
    render(){
        return(
            <div>
                <form><input className="searchform" type="search" placeholder="Ingrese su búsqueda"></input></form>
            </div>
        );
    }
}

export default Search;
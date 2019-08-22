import React, { Component } from 'react';


// components

import AddProductModal from "./AddProductModal"
import AddCategoryModal from "./AddCatModal"
import Search from './search';

class BotomMenu extends Component {
    
    render(){
        return(
            
            <div className="botom_menu"><div className="bottom_menu_icon shake-horizontal"></div>
            <Search />
            <AddProductModal/>
            <AddCategoryModal/>
            </div>
        );
    }
}

export default BotomMenu;
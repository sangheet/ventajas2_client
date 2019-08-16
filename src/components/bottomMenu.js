import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

// components
import ProductDetails from './ProductDetails';
import AddProductModal from "./AddProductModal"
import AddCategoryModal from "./AddCatModal"

class BotomMenu extends Component {
    
    render(){
        return(
            <div className="botom_menu">
            <AddProductModal/>
            <AddCategoryModal/>
            </div>
        );
    }
}

export default BotomMenu;
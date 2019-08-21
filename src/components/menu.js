import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";



// COMPONENTS



class Menu extends Component {
    
    render(){
        return(
            <Router>
            <div id="menu">
                <ul>
                    <li className="menu_item"><a href="/">Dashboard</a></li>
                    <li className="menu_item"><a href="/products/">Productos</a></li>
                    <li className="menu_item"><Link to="/categories">Categorías</Link></li>
                    <li className="menu_item"><Link to="">Venta</Link></li>
                    <li className="menu_item"><Link to="">Balance</Link></li>
                </ul>
            </div>
            </Router>
        );
    }
}

export default Menu;
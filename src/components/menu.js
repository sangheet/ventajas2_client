import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



// COMPONENTS



class Menu extends Component {
    
    render(){
        return(
            <Router>
            <div id="menu">
                <ul>
                    <li className="menu_item"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="menu_item"><Link to="/products">Productos</Link></li>
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
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";



// COMPONENTS



class Menu extends Component {
    
    render(){
        return(
            <Router>
            <div id="menu">
                <ul>
                    <li className="menu_item"><a href="/dashboard/">Dashboard</a></li>
                    <li className="menu_item"><a href="/products/">Productos<br/><p className="menu_desc">Categorías / planes / modalidades</p></a></li>
                    <li className="menu_item"><Link to="/almacen/">Almacén</Link></li>
                    <li className="menu_item"><Link to="">Venta</Link></li>
                    <li className="menu_item"><Link to="">Balance</Link></li>
                    <div className="menu_icon shake-vertical"></div>
                </ul>
            </div>
            </Router>
        );
    }
}

export default Menu;
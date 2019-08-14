import React, { Component } from 'react';



class Menu extends Component {
    
    render(){
        return(
            <div id="menu">
                <ul>
                    <li className="menu_item"><a href="#">Dashboard</a></li>
                    <li className="menu_item"><a href="#">Productos</a></li>
                    <li className="menu_item"><a href="#">Almacén</a></li>
                    <li className="menu_item"><a href="#">Venta</a></li>
                    <li className="menu_item"><a href="#">Balance</a></li>
                </ul>
            </div>
        );
    }
}

export default Menu;
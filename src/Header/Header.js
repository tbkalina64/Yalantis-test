import React from 'react'
import { NavLink, } from 'react-router-dom';
import './Header.css';

export default function Header() {

    return (
    <div className="header-top">
        <header>
            <NavLink to="/users" activeClassName="active">Users</NavLink>    
        </header>  
    </div>
    )
}

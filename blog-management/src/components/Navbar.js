import React, { useState,Component } from 'react';
import {MenuItems} from "./MenuItem"

const Navbar = () => {
    
    function handleClick() {
        window.location.href= "http://localhost:3000/";
    }
    
    return(
        <nav className="NavbarItems" >
        <h1 className="navbar-logo"  onClick={handleClick}>Blog It<i class="logo fas fa-pen-nib"></i></h1>
        <ul className={'nav-menu'}>
            {MenuItems.map((item,index) =>{
                return (
                <li key={index}>
                    <a className={item.cName} href={item.url}>
                    {item.title}
                    </a>
                </li>
                )
            })}
            
        </ul>
    </nav> 

    )
}
export default Navbar
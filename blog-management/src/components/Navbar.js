import React, { useState,Component } from 'react';
import {MenuItems} from "./MenuItem"
// import { Button} from "./Button"

const Navbar = () => {
    
    function handleClick() {
        window.location.href= "http://localhost:3000/";
    }
    
    return(
        <nav className="NavbarItems" >
        <h1 className="navbar-logo"  onClick={handleClick}>Blog It<i class="fas fa-pen-nib"></i></h1>
        {/* <div className="menu-icon">
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div> */}
        <ul className={'nav-menu active'}>
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
        {/* <Button>Sign Up</Button> */}
    </nav>

    )
}
export default Navbar
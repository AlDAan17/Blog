import React from "react";
import './header.scss';
import {Link} from "react-router-dom";


const Header = () =>{
    return(
       <header>
            <Link to='/'>Realworld Blog</Link>
            <div>
                <Link to='/sign-in' className="sign-in">Sign In</Link>
                <Link to='/sign-up' className="sign-up">Sign Up</Link>
            </div>
        </header>
    )
}

export default Header;
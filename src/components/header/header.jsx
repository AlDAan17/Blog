import React from "react";
import './header.scss';
import {Link} from "react-router-dom";

const Header = () =>{
    return(
       <header>
            <Link to='/'>Realworld Blog</Link>
            <div>
                <button className="signIn">Sign In</button>
                <button className="signUp">Sign Up</button>
            </div>
        </header>
    )
}

export default Header;
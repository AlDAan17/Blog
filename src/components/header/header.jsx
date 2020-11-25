import React from "react";
import './header.scss';
import {Link} from "react-router-dom";
import UserDataWithAvatar from '../../utils/user-data-with-avatar';

const Header = ({user, logOutAndRemoveStorageWithDispatch}) =>{
    return(
       <header>
            <Link to='/'>Realworld Blog</Link>
            <div>
                {user.username ?
                    <>
                        <Link className="create" to="/">
                            Create article
                        </Link>
                        <UserDataWithAvatar username={user.username} imageSrc={user.image} className="indent"/>
                        <Link to="/" className="logOut" onClick={logOutAndRemoveStorageWithDispatch}>
                            Log Out
                        </Link>
                    </>
                    :
                    <>
                    <Link to='/sign-in' className="sign-in">Sign In</Link>
                    <Link to='/sign-up' className="sign-up">Sign Up</Link>
                    </>
                }
            </div>
        </header>
    )
}

export default Header;
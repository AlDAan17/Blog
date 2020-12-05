import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './header.scss';
import AuthUser from './AuthUser';
import NotAuthUser from './NotAuthUser';

const Header = ({ user, logOutAndRemoveStorage }) => {
  return (
    <header>
      <Link to='/' className="title">Realworld Blog</Link>
      <div>
        {user.username ?
          <AuthUser user={user} logOutAndRemoveStorage={logOutAndRemoveStorage}/>
          :
          <NotAuthUser/>
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    username: PropTypes.string,
    bio: PropTypes.string,
    image: PropTypes.string,
    token: PropTypes.string,
  }).isRequired,
};

export default Header;
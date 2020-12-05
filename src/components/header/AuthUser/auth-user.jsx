import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserDataWithAvatar from '../../../shared/user-data-with-avatar';

const AuthUser = ({ user, logOutAndRemoveStorage }) => {
  return (
    <React.Fragment>
      <Link className="create" to="/new-article">
        Create article
      </Link>
      <Link to="/profile">
        <UserDataWithAvatar username={user.username} imageSrc={user.image} className="user"/>
      </Link>
      <Link to="/" className="log-out" onClick={logOutAndRemoveStorage}>
        Log Out
      </Link>
    </React.Fragment>
  );
};

AuthUser.propTypes = {
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

export default AuthUser
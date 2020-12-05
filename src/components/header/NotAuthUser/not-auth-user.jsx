import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthUser = () => {
  return (
    <React.Fragment>
      <Link to='/sign-in' className="sign-in">Sign In</Link>
      <Link to='/sign-up' className="sign-up">Sign Up</Link>
    </React.Fragment>
  );
};

export default NotAuthUser;
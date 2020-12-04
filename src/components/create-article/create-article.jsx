import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import './create-article.scss';
import { message } from 'antd';
import {Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArticleForm from '../../shared/article-form';

const CreateArticle = ({ article, user, successCreating, error, asyncCreateArticle, reset }) => {
  useEffect(() => {
    return reset;
  }, [reset]);

  if (!Object.keys(user).length) {
    return <Redirect to="/sign-in"/>;
  }

  if(error){
    message.error('Failed');
  }

  if (successCreating) {
    message.success('Success');
    return <Redirect to="/"/>;
  }

  return (
    <ArticleForm user={user}
                 error={error}
                 article={article}
                 mission="create"
                 successCreating={successCreating}
                 reset={reset}
                 asyncCreateArticle={asyncCreateArticle}
    />
  );
};

CreateArticle.propTypes = {
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
  article: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
    tagList: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,

  }).isRequired,
  successCreating: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  asyncCreateArticle:PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default CreateArticle;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { message } from 'antd';
import ArticleForm from '../../subcomponents/article-form';

const EditArticle = ({article, match, user, successEditing, asyncGetArticle, reset, asyncEditArticle, error, successGettingArticle }) => {

  const {
    params: { slug },
  } = match;

  useEffect(() => {
    asyncGetArticle(user.token, slug);
    return reset;
  }, [user.token, asyncGetArticle, reset, slug]);

  if (!Object.keys(user).length) {
    return <Redirect to="/sign-in" />;
  }

  if (successEditing) {
    message.success('Success');
    return <Redirect to="/"/>;
  }

  return(
    <ArticleForm article={article}
                 user={user}
                 error={error}
                 successGettingArticle={successGettingArticle}
                 mission="edit"
                 asyncEditArticle={asyncEditArticle}
                 successEditing={successEditing}
    />
  )
}

EditArticle.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  asyncGetArticle: PropTypes.func.isRequired,
  asyncEditArticle: PropTypes.func.isRequired,
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
    favorited: PropTypes.bool,
    favoritesCount: PropTypes.number,
    author: PropTypes.shape({
      username: PropTypes.string,
      bio: PropTypes.string,
      image: PropTypes.string,
      following: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  reset: PropTypes.func.isRequired,
  successEditing: PropTypes.bool.isRequired,
  successGettingArticle: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default EditArticle;
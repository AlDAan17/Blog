import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Article from '../article';
import { LoadingOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import { Alert } from 'antd';
import { asyncGetArticle } from '../../redux/action-creators';

const isMyArticle = (authorName) => {
  const myUserName = JSON.parse(sessionStorage.getItem('user'))?.username;
  return authorName === myUserName;
};

const ArticlePage = ({ user, match, article, successGettingArticle, error, deletingArticle, asyncDeleteArticle, asyncGetArticle }) => {
  console.log('article', article);
  const { slug } = match.params;

  useEffect(() => {
    asyncGetArticle(slug);
  }, [asyncGetArticle, slug]);

  if (error) {
    return <Alert className="alert" message="Article does not exist" type="error" />;
  }

  if (!successGettingArticle) {
    return <LoadingOutlined className="spinner" spin/>;
  }

  if (deletingArticle) {
    return <Redirect to="/"/>;
  }

  const {
    author: { username },
  } = article;

  return <Article {...article} isList={false}
                  showEditArticle={isMyArticle(username)}
                  asyncDeleteArticle={() => asyncDeleteArticle(user.token, slug)}
                  deletingArticle={deletingArticle}
  />;
};

ArticlePage.propTypes = {
  article: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
    tagList: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    favorited: PropTypes.bool.isRequired,
    favoritesCount: PropTypes.number.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string,
      bio: PropTypes.string,
      image: PropTypes.string,
      following: PropTypes.bool,
    }).isRequired,
  }).isRequired,
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
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  deletingArticle: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  successGettingArticle: PropTypes.bool.isRequired,
  asyncDeleteArticle: PropTypes.func.isRequired,
  asyncGetArticle: PropTypes.func.isRequired,
};

export default ArticlePage;
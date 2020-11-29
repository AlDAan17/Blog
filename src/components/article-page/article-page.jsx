import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Article from '../article';
import { LoadingOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';

const isMyArticle = (authorName) => {
  const myUserName = JSON.parse(sessionStorage.getItem('user'))?.username;
  return authorName === myUserName;
};

const ArticlePage = ({ user, match, article, successGettingArticle, deletingArticle, asyncDeleteArticle, asyncGetArticleWithDispatch }) => {
  console.log(article);
  console.log(match);
  const { slug } = match.params;

  useEffect(() => {
    asyncGetArticleWithDispatch(slug);
  }, [asyncGetArticleWithDispatch, slug]);

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
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default ArticlePage;
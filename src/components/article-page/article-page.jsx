import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import Article from '../article';
import { LoadingOutlined } from '@ant-design/icons';

const ArticlePage = ({match, article, successGettingArticle, asyncGetArticleWithDispatch}) => {
  const {slug} = match.params;

  useEffect(() => {
    asyncGetArticleWithDispatch(slug);
  }, [asyncGetArticleWithDispatch, slug])

  if(!successGettingArticle){
    return <LoadingOutlined className="spinner" spin />;
  }
  const {
    author: { username },
  } = article;
  return <Article {...article} isList={false} showEditArticle={isMyArticle(username)}/>
}

const isMyArticle = (authorName) => {
  const myUserName = JSON.parse(sessionStorage.getItem('user')).username;
  return authorName === myUserName;
}

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
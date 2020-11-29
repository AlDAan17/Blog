import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import CreateArticle from '../../containers/create-article-container/create-article-container';
import { LoadingOutlined } from '@ant-design/icons';

const EditArticle = ({ article, asyncGetArticleWithDispatch, resetWithDispatch, match, user, successGettingArticle, asyncEditArticleWithDispatch, successEditing }) => {
  const {
    params: { slug },
  } = match;

  useEffect(() => {
    asyncGetArticleWithDispatch(slug);
    return resetWithDispatch;
  }, [asyncGetArticleWithDispatch, resetWithDispatch, slug]);

  if (!Object.keys(user).length) {
    return <Redirect to="/sign-in" />;
  }

  if(!successGettingArticle){
    return <LoadingOutlined className="spinner" spin />;
  }

  return(
    <CreateArticle mission="edit" article={article} asyncEditArticleWithDispatch={asyncEditArticleWithDispatch} successEditing={successEditing}/>
  )
}

export default EditArticle;
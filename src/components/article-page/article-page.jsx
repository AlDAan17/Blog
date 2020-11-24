import React from 'react';
import PropTypes from "prop-types";
import Article from '../article';

const ArticlePage = ({match, articles}) => {
  const {slug} = match.params;
  const article = articles.find((art) => art.slug === slug);
  return <Article {...article} isList={false}/> 
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
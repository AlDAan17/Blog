import React from 'react';
import PropTypes from 'prop-types';
import './article.scss';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Markdown from 'markdown-to-jsx';
import UserDataWithAvatar from '../../utils/user-data-with-avatar';

const mapTags = (tags) => {
  return tags.map((tag) => <p className="article__tag">{tag}</p>);
};

const Article = ({ title, description, tagList, favoritesCount, author, createdAt, slug, body, showEditArticle }) => {
  return (
    <div className="article">
      <div className="article__item">
        <div style={{marginRight:50}}>
          <div>
            <Link to={`/articles/${slug}`} className="article__head">{title}</Link>
            <label>
              <input className="heart__checkbox" type='checkbox'/>
              <span className="heart"/>
            </label>
            <label>{favoritesCount}</label>
          </div>
          <div>{mapTags(tagList)}</div>
          <div className="article__description">{description}
          </div>
        </div>
        <div className="article__container">
          <UserDataWithAvatar
            username={author.username}
            date={format(new Date(createdAt), 'LLLL d, y')}
            imageSrc={author.image}
          />
            {showEditArticle ? (
              <div className="edit-buttons">
                  <Link to="/articles/"  className="delete-article">delete</Link>
                  <Link to={`/articles/${slug}/edit`} className="edit-article">edit</Link>
              </div>
            ) : null}
        </div>
      </div>
      <Markdown>{body}</Markdown>
    </div>
  );
};


Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
  favoritesCount: PropTypes.number.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
    bio: PropTypes.string,
    image: PropTypes.string.isRequired,
    following: PropTypes.bool.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Article;
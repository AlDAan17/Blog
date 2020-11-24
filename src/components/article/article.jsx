import React from "react";
import PropTypes from 'prop-types';
import './article.scss';
import {Link} from 'react-router-dom';
import {format} from 'date-fns';
import Markdown from "markdown-to-jsx";
// import { Pagination } from 'antd';

const mapTags = (tags) => {
    return tags.map((tag) => <p className="article__tag">{tag}</p>)
}

const Article = ({title, description, tagList, favoritesCount, author, createdAt, slug, body}) => {
    return (
        <>
            <div className="article">
                <div className="article__item">
                    <div className="left">
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
                    <div className="right">
                        <div className="article__data">
                            <div className="article__data-name">{author.username}</div>
                            <div className="article__data-birth">{format(new Date(createdAt), 'LLLL d, y')}</div>
                        </div>
                        <div className="article__avatar">
                            <img className="article__avatar-item" src={author.image} alt="avatar"/>
                        </div>
                    </div>
                </div>
                <Markdown>{body}</Markdown>
            </div>
        </>
    )
}



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
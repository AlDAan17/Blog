import React from "react";
import './article.scss';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
// import { Pagination } from 'antd';

const Article = ({title, description, tagList, favoritesCount, author, createdAt, slug, body}) => {
    console.log(body)
    return (
        <React.Fragment>
            <div className="article">
                <div className="left">
                    <div>
                        <Link to={`/articles/${slug}`} className="article__head">{title}</Link>
                        <label>
                        <input className="heart__checkbox" type='checkbox'/>
                        <span className="heart" />
                        </label>
                        <label>{favoritesCount}</label>
                    </div>
                    <div className="article__tags">{mapTags(tagList)}</div>
                    <div className="article__text">{description}
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
        </React.Fragment>
    )
}

const mapTags = (tags) =>{
    return tags.map((tag) => <p className="article__tag">{tag}</p>)
}

export default Article;
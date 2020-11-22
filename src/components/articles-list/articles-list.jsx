import React from "react";
import './articles-list.scss';
import 'antd/dist/antd.css';
import Article from "../article";
// import {Pagination} from "antd";
import testService from './../services/test-service';

const ArticlesList = ({match}) => {
    const articles = testService();
    const slug = match.params.slug;
    console.log(slug)
    if (slug) {
        const article = articles.find((article) => article.slug === slug);
        return <Article {...article}/>
    }

    const elements = articles.map((article) => <Article key={article.slug} {...article}/> );
    console.log('elements', elements)
    return <div>{elements}</div>

    // return (
    //     <div className="container">
    //         <Article/>
    //         <Pagination defaultCurrent={1} total={50} className="pagination"/>
    //     </div>
    // )
}

export default ArticlesList;
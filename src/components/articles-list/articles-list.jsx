import React, {useEffect} from "react";
import './articles-list.scss';
import 'antd/dist/antd.css';
import Article from "../article";
import {Pagination} from "antd";

const ArticlesList = ({asyncGetArticlesWithDispatch, articles, page, successfullDownload, error}) => {

    useEffect(() => {
        asyncGetArticlesWithDispatch(1);
    }, []);


    const elements = articles.map((article) => {
        return <Article key={article.slug} {...article} isList={true}/>
    });
    return (

        <div>
            {elements}
            <Pagination current={page} pageSize={10} total={500} showSizeChanger={false} size="small" className="pagination" onChange={asyncGetArticlesWithDispatch} />
        </div>
    )
}

export default ArticlesList;
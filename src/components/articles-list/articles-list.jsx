import React, {useEffect} from "react";
import './articles-list.scss';
import 'antd/dist/antd.css';
import Article from "../article";
import {Pagination, Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const ArticlesList = ({asyncGetArticlesWithDispatch, articles, page, successfullDownload, error}) => {

    useEffect(() => {
        asyncGetArticlesWithDispatch(1);
    }, []);

    if(!successfullDownload){
        return <LoadingOutlined className="spinner" spin />;
    }

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
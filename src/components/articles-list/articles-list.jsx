import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import './articles-list.scss';
import 'antd/dist/antd.css';
import {Pagination, Alert} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import Article from "../article";

const ArticlesList = ({asyncGetArticlesWithDispatch, articles, page, successfullDownload, error}) => {

    useEffect(() => {
        asyncGetArticlesWithDispatch(1);
    }, []);

    if(!successfullDownload){
        return <LoadingOutlined className="spinner" spin />;
    }

    if(error){
        return <Alert className="alert" message="Sorry, articles not received" type="error"/>
    }

    const elements = articles.map((article) => {
        return <Article key={article.slug} {...article} isList/>
    });
    return (

        <div>
            {elements}
            <Pagination current={page} pageSize={10} total={500} showSizeChanger={false} size="small" className="pagination" onChange={asyncGetArticlesWithDispatch} />
        </div>
    )
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    successfullDownload: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    asyncGetArticlesWithDispatch: PropTypes.func.isRequired,
};

export default ArticlesList;
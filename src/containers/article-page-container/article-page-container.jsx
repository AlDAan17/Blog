import { connect } from 'react-redux';
import { asyncGetArticles,asyncGetArticle, reset } from '../../redux/action-creators';
import ArticlePage from '../../components/article-page';

const mapStateToProps = (state) => ({
  articles: state.data.articles,
  article: state.lastOpenedArticle,
  successGettingArticle: state.successGettingArticle,
});

const mapDispatchToProps = {
  asyncGetArticleWithDispatch: asyncGetArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);

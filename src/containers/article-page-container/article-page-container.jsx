import { connect } from 'react-redux';
import { asyncGetArticles,asyncGetArticle, asyncDeleteArticle, reset } from '../../redux/action-creators';
import ArticlePage from '../../components/article-page';

const mapStateToProps = (state) => ({
  user: state.user,
  articles: state.data.articles,
  article: state.lastOpenedArticle,
  successGettingArticle: state.successGettingArticle,
  deletingArticle: state.deletingArticle,
});

const mapDispatchToProps = {
  asyncGetArticleWithDispatch: asyncGetArticle,
  asyncDeleteArticle: asyncDeleteArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);

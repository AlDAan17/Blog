import { connect } from 'react-redux';
import {asyncGetArticle, asyncDeleteArticle } from '../../redux/action-creators';
import ArticlePage from '../../components/article-page';

const mapStateToProps = (state) => ({
  user: state.user,
  article: state.lastOpenedArticle,
  successGettingArticle: state.successGettingArticle,
  error: state.error,
  deletingArticle: state.deletingArticle,
});

const mapDispatchToProps = {
  asyncGetArticle: asyncGetArticle,
  asyncDeleteArticle: asyncDeleteArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);

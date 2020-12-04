import { connect } from 'react-redux';
import {asyncGetArticle, asyncDeleteArticle, asyncEstimateArticle } from '../../redux/action-creators';
import ArticlePage from '../../components/article-page';
import {
  getDeletingArticle,
  getError,
  getErrorFavoritingArticle,
  getLastOpenedArticle,
  getSuccessGettingArticle,
  getUser,
} from '../../redux/users-selectors';

const mapStateToProps = (state) => ({
  user: getUser(state),
  article: getLastOpenedArticle(state),
  successGettingArticle: getSuccessGettingArticle(state),
  error: getError(state),
  deletingArticle: getDeletingArticle(state),
  errorFavoritingArticle: getErrorFavoritingArticle(state),
});

const mapDispatchToProps = {
  asyncGetArticle,
  asyncDeleteArticle,
  asyncEstimateArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);

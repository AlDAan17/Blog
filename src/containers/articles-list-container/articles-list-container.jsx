import { connect } from 'react-redux';
import ArticlesList from '../../components/articles-list';
import { asyncDeleteArticle, asyncEstimateArticle, asyncGetArticles } from '../../redux/action-creators';
import {
  getArticles,
  getError,
  getErrorFavoritingArticle,
  getPage,
  getSuccessfullDownload,
  getUser,
} from '../../redux/users-selectors';

const mapStateToProps = (state) => ({
  user: getUser(state),
  articles: getArticles(state),
  page: getPage(state),
  successfullDownload: getSuccessfullDownload(state),
  error: getError(state),
  errorFavoritingArticle: getErrorFavoritingArticle(state),
})

const mapDispatchToProps = {
  asyncGetArticles,
  asyncDeleteArticle,
  asyncEstimateArticle,
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
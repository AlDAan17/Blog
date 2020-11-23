import { connect } from 'react-redux';
import ArticlesList from '../../components/articles-list';
import {asyncGetArticles} from "../../redux/action-creators";

const mapStateToProps = (state) => ({
  articles: state.data.articles,
  page: state.data.page,
  successfullDownload: state.successfullDownload,
  error:state.error,
})

const mapDispatchToProps = (dispatch) => ({
  asyncGetArticlesWithDispatch: (page) => dispatch(asyncGetArticles(page)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
import { connect } from 'react-redux';
import EditArticle from '../../components/edit-article';
import { asyncGetArticle, reset, asyncEditArticle } from '../../redux/action-creators';
import { getError, getSuccessEditingArticle, getSuccessGettingArticle, getUser } from '../../redux/users-selectors';

const mapStateToProps = (state) => ({
  article: state.lastOpenedArticle,
  successGettingArticle: getSuccessGettingArticle(state),
  error: getError(state),
  user: getUser(state),
  successEditing: getSuccessEditingArticle(state),
});

const mapDispatchToProps = {
  asyncGetArticle,
  reset,
  asyncEditArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
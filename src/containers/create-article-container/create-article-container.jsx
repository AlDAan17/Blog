import { connect } from 'react-redux';
import CreateArticle from '../../components/create-article';
import { asyncCreateArticle, reset } from '../../redux/action-creators';
import {
  getError,
  getLastOpenedArticle,
  getSuccessCreatingArticle,
  getSuccessfullDownload,
  getUser,
} from '../../redux/users-selectors';

const mapStateToProps = (state) => ({
  article: getLastOpenedArticle(state),
  user: getUser(state),
  successCreating: getSuccessCreatingArticle(state),
  error: getError(state),
  successfullDownload: getSuccessfullDownload(state),
});

const mapDispatchToProps = {
  asyncCreateArticle,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);

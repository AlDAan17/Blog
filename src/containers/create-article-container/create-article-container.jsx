import { connect } from 'react-redux';
import CreateArticle from '../../components/create-article';
import { asyncCreateArticle, reset } from '../../redux/action-creators';

const mapStateToProps = (state) => ({
  user: state.user,
  successCreating: state.successCreatingArticle,
  // errorCreating: state.errorRegistrationOrAuthentication,
});

const mapDispatchToProps = {
  asyncCreateArticleWithDispatch: asyncCreateArticle,
  resetWithDispatch: reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);

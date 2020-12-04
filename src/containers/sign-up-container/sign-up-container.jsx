import { connect } from 'react-redux';
import SignUp from "../../components/sign-up";
import { asyncRegistration } from '../../redux/action-creators'
import { getError, getServerValidations, getUser } from '../../redux/users-selectors';

const mapStateToProps = (state) => ({
  user: getUser(state),
  serverValidations: getServerValidations(state),
  error: getError(state),
})

const mapDispatchToProps = (dispatch) => ({
  asyncRegistration: (username, email, password) => dispatch(asyncRegistration(username, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
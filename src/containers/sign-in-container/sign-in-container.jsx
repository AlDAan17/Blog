import { connect } from 'react-redux';
import SignIn from '../../components/sign-in';
import { asyncAuthentication } from '../../redux/action-creators';
import { getError, getServerValidations, getUser } from '../../redux/users-selectors';

const mapStateToProps = (state) => ({
    user: getUser(state),
    serverValidations: getServerValidations(state),
    error: getError(state),
})

const mapDispatchToProps = (dispatch) => ({
    asyncAuthentication: (email, password) => dispatch(asyncAuthentication(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
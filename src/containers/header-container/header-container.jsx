import { connect } from 'react-redux';
import Header from '../../components/header';
import { logOutAndRemoveStorage } from '../../redux/action-creators';
import { getUser } from '../../redux/users-selectors';

const mapStateToProps = (state) => ({
    user: getUser(state),
})

const mapDispatchToProps = (dispatch) => ({
    logOutAndRemoveStorage: () => dispatch(logOutAndRemoveStorage())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
import { connect } from 'react-redux';
import EditProfile from '../../components/edit-profile';
import { asyncEditProfile } from '../../redux/action-creators';
import { getError, getServerValidations, getSuccessEditingProfile, getUser } from '../../redux/users-selectors';

const mapStateToProps = (state) => ({
    user: getUser(state),
    serverValidations: getServerValidations(state),
    successEditing: getSuccessEditingProfile(state),
    error: getError(state),
});

const mapDispatchToProps = {
    asyncEditProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
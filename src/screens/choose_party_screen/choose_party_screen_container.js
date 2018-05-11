// Library Imports
import { connect } from 'react-redux';

// Local Imports
import ChoosePartyScreen from './choose_party_screen';
import { editParty }     from '../../actions/client_actions';
import { navigateTo }    from '../../actions/navigation_actions';

//--------------------------------------------------------------------//

const mapStateToProps = ({ client, navigation }, ownProps) => ({
  client:        client,
  currentScreen: navigation.currentScreen
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  editParty:   (authToken, firebaseUserObj, party) => dispatch(editParty(authToken, firebaseUserObj, party)),
  navigateTo:  (screen, props)                     => dispatch(navigateTo(screen, props))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoosePartyScreen);

import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { addNewMessage, } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, { addNewMessage }),
  withAuthRedirect,
)(Dialogs)

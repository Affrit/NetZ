import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { addMesssageActionCreator, } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {
      const action = addMesssageActionCreator(newMessageText)
      dispatch(action)
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs)

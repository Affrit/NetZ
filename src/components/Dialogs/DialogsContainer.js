import { connect } from 'react-redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { addMesssageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      const action = addMesssageActionCreator()
      dispatch(action)
    },
    changenewMessageText: (text) => {
      const action = updateNewMessageTextActionCreator(text)
      dispatch(action)
    },
  }
}

let WithAuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirectComponent)

export default DialogsContainer

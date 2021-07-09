import { connect } from 'react-redux'
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

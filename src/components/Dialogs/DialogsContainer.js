import React from 'react'
import { addMesssageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {
  let state = props.store.getState()

  const changenewMessageText = (text) => {
    const action = updateNewMessageTextActionCreator(text)
    props.store.dispatch(action)
  }

  const addMessage = () => {
    const action = addMesssageActionCreator()
    props.store.dispatch(action)
  }
  
  return (
    <Dialogs addMessage={addMessage} changenewMessageText={changenewMessageText}
    state={state.dialogsPage}/>
 )
}

export default DialogsContainer
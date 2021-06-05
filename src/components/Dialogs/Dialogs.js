import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'
import React from 'react'
import { addMesssageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state'


const Dialogs = (props) => {
  let newMessage = React.useRef()

  const changenewMessageText = () => {
    let text = newMessage.current.value
    const action = updateNewMessageTextActionCreator(text)
    props.dispatch(action)
  }

  const addMessage = () => {
    const action = addMesssageActionCreator()
    props.dispatch(action)
  }
  
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        {props.state.dialogsData.map(obj => <DialogsItem key={obj.id} name={obj.name} avatar={obj.avatar} id={obj.id}/>)}
      </div>
      <div className={s.messages}>
        {props.state.messageData.map(obj => <Messages key={obj.id} text={obj.text}/>)}
          <div className={s.newMessage}>
            <div className={s.newMessage__area}>
              <textarea onChange={changenewMessageText} ref={newMessage} value={props.state.newMessageText} className={s.message__textarea} placeholder="New Message"></textarea>
            </div>
            <div className={s.newMessage__wrapper}>
              <button onClick={ addMessage } className={s.newMessage__button}>Send message</button>
            </div>
          </div>
      </div>
    </div>
 )
}

export default Dialogs
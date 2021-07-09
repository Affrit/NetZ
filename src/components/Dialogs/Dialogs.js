import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'
import React from 'react'
import { Redirect } from 'react-router-dom'

const Dialogs = (props) => {
  let newMessage = React.useRef()

  const onChangenewMessageText = () => {
    let text = newMessage.current.value
    props.changenewMessageText(text)
  }

  return (
    !props.isAuth ? <Redirect to='/login' /> :
      <div className={s.dialogsWrapper}>
        <div className={s.dialogs}>
          {props.dialogsPage.dialogsData.map(obj => <DialogsItem key={obj.id} name={obj.name} avatar={obj.avatar} id={obj.id} />)}
        </div>
        <div className={s.messages}>
          {props.dialogsPage.messageData.map(obj => <Messages key={obj.id} text={obj.text} />)}
          <div className={s.newMessage}>
            <div className={s.newMessage__area}>
              <textarea onChange={onChangenewMessageText} ref={newMessage} value={props.dialogsPage.newMessageText} className={s.message__textarea} placeholder="New Message"></textarea>
            </div>
            <div className={s.newMessage__wrapper}>
              <button onClick={props.addMessage} className={s.newMessage__button}>Send message</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Dialogs
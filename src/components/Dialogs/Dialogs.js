import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        {props.state.dialogsData.map(obj => <DialogsItem key={obj.id} name={obj.name} avatar={obj.avatar} id={obj.id}/>)}
      </div>
      <div className={s.messages}>
        {props.state.messageData.map(obj => <Messages key={obj.id} text={obj.text}/>)}
          <div className={s.newMessage}>
            <div className={s.newMessage__area}>
              <textarea className={s.message__textarea} placeholder="New Message" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className={s.newMessage__wrapper}>
              <button className={s.newMessage__button}>Send message</button>
            </div>
          </div>
      </div>
    </div>
 )
}

export default Dialogs
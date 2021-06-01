import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/Dialogs'
import Messages from './Messages/Dialogs'

const Dialogs = (props) => {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        {props.dialogsData.map(obj => <DialogsItem key={obj.id} name={obj.name} id={obj.id}/>)}
      </div>
      <div className={s.messages}>
        {props.messageData.map(obj => <Messages key={obj.id} text={obj.text}/>)}
      </div>
    </div>
 )
}

export default Dialogs
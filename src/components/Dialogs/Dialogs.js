import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogsItem = (props) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={s.dialogs__dialog}>
          <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props) => {
    return (
        <div className={s.messages__message}>
            {props.text}
        </div>
    )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        <DialogsItem name='Julia' id='1'/>
        <DialogsItem name='Stas' id='2'/>
        <DialogsItem name='Dima' id='3'/>
        <DialogsItem name='Andrey' id='4'/>
        <DialogsItem name='Sergey' id='5'/>
      </div>
      <div className={s.messages}>
          <Messages text='Hello'/>
          <Messages text='How are you?'/>
          <Messages text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iusto quia nemo, earum nisi autem molestiae? Necessitatibus labore ad voluptatibus odit numquam earum, eaque obcaecati quod, accusantium qui ducimus eligendi?'/>
      </div>
    </div>
 )
}

export default Dialogs
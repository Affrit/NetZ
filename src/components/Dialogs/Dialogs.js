import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/Dialogs'
import Messages from './Messages/Dialogs'

const messageData = [
  {id: '1', text: 'Hello'},
  {id: '2', text: 'How are you?'},
  {id: '3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iusto quia nemo, earum nisi autem molestiae? Necessitatibus labore ad voluptatibus odit numquam earum, eaque obcaecati quod, accusantium qui ducimus eligendi?'},
]

const dialogsData = [
  {id: '1', name: 'Julia'},
  {id: '2', name: 'Stas'},
  {id: '3', name: 'Dima'},
  {id: '4', name: 'Andrey'},
  {id: '5', name: 'Sergey'},
]

const Dialogs = (props) => {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        {dialogsData.map(obj => <DialogsItem key={obj.id} name={obj.name} id={obj.id}/>)}
      </div>
      <div className={s.messages}>
        {messageData.map(obj => <Messages key={obj.id} text={obj.text}/>)}
      </div>
    </div>
 )
}

export default Dialogs
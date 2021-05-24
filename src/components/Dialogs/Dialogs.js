import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        <div className={s.dialogs__dialog}>
          <NavLink activeClassName={s.active} to="/dialogs/1">Julia</NavLink>
        </div>
        <div className={s.dialogs__dialog}>
          <NavLink activeClassName={s.active} to="/dialogs/2">Stas</NavLink>
        </div>
        <div className={s.dialogs__dialog}>
          <NavLink activeClassName={s.active} to="/dialogs/3">Dima</NavLink>
        </div>
        <div className={s.dialogs__dialog}>
          <NavLink activeClassName={s.active} to="/dialogs/4">Andrey</NavLink>
        </div>
        <div className={s.dialogs__dialog}>
          <NavLink activeClassName={s.active} to="/dialogs/5">Sergey</NavLink>
        </div>
      </div>
      <div className={s.messages}>
          <div className={s.messages__message}>
            Hello
          </div>
          <div className={s.messages__message}>
            How are you?
          </div>
          <div className={s.messages__message}>
            Cool!
          </div>
      </div>
    </div>
 )
}

export default Dialogs
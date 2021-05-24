import { NavLink } from 'react-router-dom'
import s from './Nav.module.css'

const Nav = (props) => {
    return (
        <nav className={s.nav}>
        <div className={s.links}>
          <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
        </div>
        <div className={s.links}>
          <NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink>
        </div>
        <div className={s.links}>
          <NavLink activeClassName={s.active} to="/news">News</NavLink>
        </div>
        <div className={s.links}>
          <NavLink activeClassName={s.active} to="/musik">Musik</NavLink>
        </div>
        <div className={s.links}>
          <NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
        </div>
      </nav>
    )
}

export default Nav

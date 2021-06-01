import { NavLink } from 'react-router-dom'
import Friend from './Friend/Friend'
import s from './Nav.module.css'

const Nav = (props) => {
  console.log(props)
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

        <div className={s.friends__wrapper}>
        <h3 className={s.friends__title}>Friends</h3>
          <div className={s.friends__container}>
            {props.state.friends.map(friend => <Friend key={friend.id} name={friend.name} avatar={friend.avatar}/>)}
          </div>
        </div>


      </nav>
  )
}

export default Nav

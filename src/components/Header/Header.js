import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import photo from '../../assets/img/userPhoto.jpg'

const Header = (props) => {

  let currentUser = <>
    <img className={s.userPhoto} src={props.currentAuthUser?.photos?.small ?? photo} alt="#"/>
    <span>{props.login}</span>
  </>

  return (
    <header className={s.header}>
      <img className={s.header__img} src="https://www.kindpng.com/picc/m/226-2263417_3d-spider-web-red-spider-web-vector-hd.png" alt="#" />
      <h1 className={s.header__text}>Wellcome to Netz!</h1>
      <div className={s.login__wrapper}>
        {props.isAuth ? currentUser : <NavLink to={'/login'} className={s.login__button}>Login</NavLink>}
      </div>
    </header>
      
    )
}

export default Header

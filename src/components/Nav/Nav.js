import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Musik</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
    )
}

export default Nav

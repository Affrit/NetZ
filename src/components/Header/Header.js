import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
        <img className={s.header__img} src="https://www.kindpng.com/picc/m/226-2263417_3d-spider-web-red-spider-web-vector-hd.png" alt="#" />
        <h1 className={s.header__text}>Wellcome to Netz!</h1>
      </header>
      
    )
}

export default Header

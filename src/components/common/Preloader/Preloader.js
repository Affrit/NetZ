import fetchingLogo from '../../../assets/svg/fetchingLogo.svg'
import s from './Preloader.module.css'

const Preloader = () => {
  return (
    <div className={s.loading}>
      <p>LOADING...</p>
      <img className={s.loading__img} src={fetchingLogo} alt="#" />
    </div>
  )
}

export default Preloader
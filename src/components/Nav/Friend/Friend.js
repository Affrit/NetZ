import s from './Friend.module.css'

const Friend = (props) => {
  return (
    <div className={s.friend__wrapper}>
      <img className={s.friend__img} src={props.avatar} alt="#" />
      <span className={s.friend__name}>{props.name}</span> {/* тут будет навлинк на профиль друга */}
  </div>
  )
}

export default Friend
import { NavLink } from 'react-router-dom'
import s from './Users.module.css'

const Users = (props) => {
  if (props.users.length === 0){
    props.setUsers([
      {id: 1, followed: true, name: 'Julia', avatar: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg', status: 'i am a BOSS', location: {city: 'Kharkiv', country: 'Ukraine'},},
      {id: 2, followed: true, name: 'Stas', avatar: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg', status: 'i am a BOSS', location: {city: 'Kharkiv', country: 'Ukraine'},},
      {id: 3, followed: true, name: 'Dima', avatar: 'https://www.blast.hk/attachments/64805/', status: 'i am a BOSS', location: {city: 'Merefa', country: 'Ukraine'},},
      {id: 4, followed: false, name: 'Andrey', avatar: 'https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png', status: 'i am a BOSS', location: {city: 'Minsk', country: 'Belarus'},},
    ],)
  }

  return (
    <div>
      {
        props.users.map(user => <div key={user.id} className={s.users__wrapper}>
          <div className={s.user}>
            <div className={s.user__left}>
                <img className={s.user__avatar} src={user.avatar} alt="#" />
                {user.followed ? 
                  <button onClick={() => props.unfollow(user.id)} className={s.user__button}>unfollow</button> :
                  <button onClick={() => props.follow(user.id)} className={s.user__button}>follow</button>}
            </div>
            <div className={s.user__right}>
              <div className={s.user__nameStatusWrapper}>
                <div className={s.user__name}>{user.name}</div>
                <div className={s.user__status}>{user.status}</div>
              </div>
              <div className={s.user__cityCountryWrapper}>
                <div className={s.user__country}>{user.location.country}</div>
                <div className={s.user__city}>{user.location.city}</div>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default Users

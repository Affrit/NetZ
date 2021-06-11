import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import s from './Users.module.css'
import userPhoto from '../../assets/img/userPhoto.jpg'

class Users extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => this.props.setUsers(response.data.items))
    }
  }

  render() {
    return (
      <div>
        {this.props.users.map(user => <div key={user.id} className={s.users__wrapper}>
          <div className={s.user}>
            <div className={s.user__left}>
              <img className={s.user__avatar} src={user.photos.small ?? userPhoto} alt="#" />
              {user.followed ?
                <button onClick={() => this.props.unfollow(user.id)} className={s.user__button}>unfollow</button> :
                <button onClick={() => this.props.follow(user.id)} className={s.user__button}>follow</button>}
            </div>
            <div className={s.user__info}>
              <div className={s.user__nameStatusWrapper}>
                <div className={s.user__name}>{user.name}</div>
                <div className={s.user__status}>{user.status}</div>
              </div>
              <div className={s.user__cityCountryWrapper}>
                <div className={s.user__country}>{user.location?.country ?? 'country'}</div>
                <div className={s.user__city}>{user.location?.city ?? 'city'}</div>
              </div>
            </div>
          </div>
        </div>)
        }
      </div>
    )
  }
}

export default Users
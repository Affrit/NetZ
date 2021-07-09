import s from './Users.module.css'
import userPhoto from '../../assets/img/userPhoto.jpg'
import Preloader from '../common/Preloader/Preloader.js'
import PageControl from '../common/PageControl/PageControl.js'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      
      {props.isFetching ? <Preloader /> :
        props.users.map(user => <div key={user.id} className={s.users__wrapper}>
          <div className={s.user}>
            <div className={s.user__left}>

              <NavLink to={`/profile/${user.id}`} >
                <img className={s.user__avatar} src={user.photos.small ?? userPhoto} alt="#" />
              </NavLink>

              {user.followed ?
                <button disabled={props.isFollowInProgress.some(id => id === user.id)}
                  onClick={() => props.unfollow(user.id)} className={s.user__button}>unfollow</button> :
                <button disabled={props.isFollowInProgress.some(id => id === user.id)}
                  onClick={() => props.follow(user.id)} className={s.user__button}>follow</button>}

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
      <PageControl pages={pages}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        onShowMoreUsers={props.onShowMoreUsers}
        choosePageNumberValue={props.choosePageNumberValue}
        PageNumberValue={props.PageNumberValue}
        setPageNumber={props.setPageNumber}
        setCurrentPage={props.setCurrentPage}
        isPageSelection={props.isPageSelection}
        setIsPageSelection={props.setIsPageSelection} />
    </div>
  )
}

export default Users

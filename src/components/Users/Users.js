import s from './Users.module.css'
import userPhoto from '../../assets/img/userPhoto.jpg'
import Preloader from '../common/Preloader'


const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++){
    pages.push(i)
  }

  const showPageNumbers = () => {
    switch(props.currentPage) {
      case 1:
        return [pages.slice(props.currentPage - 1, props.currentPage + 6).map(page => {
          return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>}), <span>...</span>, pages.slice(-1).map(page => {
            return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
          })]

      case 2:
        return [pages.slice(props.currentPage - 2, props.currentPage + 5).map(page => {
          return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>}), <span>...</span>, pages.slice(-1).map(page => {
            return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
          })]

      case 3:
        return [pages.slice(props.currentPage - 3, props.currentPage + 4).map(page => {
          return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>}), <span>...</span>, pages.slice(-1).map(page => {
            return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
          })]

      case 4:
        return [pages.slice(props.currentPage - 4, props.currentPage + 3).map(page => {
          return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active :  s.pagesNumber}>{page}</span>}), <span>...</span>, pages.slice(-1).map(page => {
            return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
          })]

      case pages.length:
        return [<span onClick={() => props.onPageChanged(1)} className={props.currentPage === 1 ? s.pagesNumber_active : s.pagesNumber}>1</span>, <span>...</span>, pages.slice(props.currentPage - 4).map(page => {
          return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active :  s.pagesNumber}>{page}</span>})]

      default:
        return [<span onClick={() => props.onPageChanged(1)} className={props.currentPage === 1 ? s.pagesNumber_active : s.pagesNumber}>1</span>, <span>...</span>, pages.slice(props.currentPage - 4, props.currentPage + 3).map(page => {
          return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>}), <span>...</span>, pages.slice(-1).map(page => {
            return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
          })]
    }
  }

  return (
    <div>
        {props.isFetching ? <Preloader /> :
        props.users.map(user => <div key={user.id} className={s.users__wrapper}>
          <div className={s.user}>
            <div className={s.user__left}>
              <img className={s.user__avatar} src={user.photos.small ?? userPhoto} alt="#" />
              {user.followed ?
                <button onClick={() => props.unfollow(user.id)} className={s.user__button}>unfollow</button> :
                <button onClick={() => props.follow(user.id)} className={s.user__button}>follow</button>}
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
        <div onClick={props.onShowMoreUsers} className={s.showMore__wrapper}>
          <img className={s.showMore__icon} src="https://pics.freeicons.io/uploads/icons/png/17446653211558965377-512.png" alt="#" />
          <span className={s.showMore_button}>Показать еще 5 пользователей...</span>
        </div>
        <hr />
        <div className={s.pagesNumber__wrapper}>
          {showPageNumbers()}
        </div>
      </div>
  )
}

export default Users

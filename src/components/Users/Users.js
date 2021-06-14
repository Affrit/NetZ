import React from 'react'
import axios from 'axios'
import s from './Users.module.css'
import userPhoto from '../../assets/img/userPhoto.jpg'

class Users extends React.Component {

  constructor(props) {
    super(props)
    this.isShowMore = false
  }

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
  }

  componentDidUpdate(prevProps) {
    if ((this.props.currentPage !== prevProps.currentPage) && this.isShowMore){
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => this.props.setMoreUsers(response.data.items))
    } else if (this.props.currentPage !== prevProps.currentPage) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => this.props.setUsers(response.data.items))
    }
  }

  onPageChanged = (page) => {
    this.isShowMore = false
    this.props.setCurrentPage(page)
  }

  onShowMoreUsers = () => {
    this.isShowMore = true
    this.props.setCurrentPage(this.props.currentPage + 1)
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++){
      pages.push(i)
    }

    const showPageNumbers = () => {
      switch(this.props.currentPage) {
        case 1:
          return [pages.slice(this.props.currentPage - 1, this.props.currentPage + 6).map(page => {
            return <span onClick={() => this.onPageChanged(page)} className={this.props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>}), <span>...</span>, pages.slice(-1).map(page => {
              return <span onClick={() => this.onPageChanged(page)} className={this.props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
            })]

        case 2:
          return [pages.slice(this.props.currentPage - 2, this.props.currentPage + 5).map(page => {
            return <span onClick={() => this.onPageChanged(page)} className={this.props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>}), <span>...</span>, pages.slice(-1).map(page => {
              return <span onClick={() => this.onPageChanged(page)} className={this.props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
            })]

        case 3:
          return [pages.slice(this.props.currentPage - 3, this.props.currentPage + 4).map(page => {
            return <span onClick={() => this.onPageChanged(page)} className={this.props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>}), <span>...</span>, pages.slice(-1).map(page => {
              return <span onClick={() => this.onPageChanged(page)} className={this.props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
            })]

        case 4:
          return [pages.slice(this.props.currentPage - 4, this.props.currentPage + 3).map(page => {
            return <span onClick={() => this.onPageChanged(page)} className={this.props.currentPage === page ? s.pagesNumber_active :  s.pagesNumber}>{page}</span>}), <span>...</span>, pages.slice(-1).map(page => {
              return <span onClick={() => this.onPageChanged(page)} className={this.props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
            })]

        case pages.length:
          return [<span onClick={() => this.onPageChanged(1)} className={this.props.currentPage === 1 ? s.pagesNumber_active : s.pagesNumber}>1</span>, <span>...</span>, pages.slice(this.props.currentPage - 4).map(page => {
            return <span onClick={() => this.onPageChanged(page)} className={this.props.currentPage === page ? s.pagesNumber_active :  s.pagesNumber}>{page}</span>})]

        default:
          return [<span onClick={() => this.onPageChanged(1)} className={this.props.currentPage === 1 ? s.pagesNumber_active : s.pagesNumber}>1</span>, <span>...</span>, pages.slice(this.props.currentPage - 4, this.props.currentPage + 3).map(page => {
            return <span onClick={() => this.onPageChanged(page)} className={this.props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>}), <span>...</span>, pages.slice(-1).map(page => {
              return <span onClick={() => this.onPageChanged(page)} className={this.props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
            })]
      }
    }

    return (
      <div>

        {this.props.users.length === 0 ?
        <div className={s.loading}><p>LOADING...</p></div> :
        this.props.users.map(user => <div key={user.id} className={s.users__wrapper}>
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

        <div onClick={this.onShowMoreUsers} className={s.showMore__wrapper}>
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
}

export default Users

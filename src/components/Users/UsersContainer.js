import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setMoreUsersActionCreator } from "../../redux/usersReducer";
import React from 'react'
import axios from 'axios'
import Users from './Users'

class UsersContainer extends React.Component {

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
    return (
      <div>
        <Users setCurrentPage={this.props.setCurrentPage}
               currentPage={this.props.currentPage} 
               totalUsersCount={this.props.totalUsersCount}
               users={this.props.users} 
               pageSize={this.props.pageSize}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               onPageChanged={this.onPageChanged}
               onShowMoreUsers={this.onShowMoreUsers}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      const action = followActionCreator(userID)
      dispatch(action)
    },

    unfollow: (userID) => {
      const action = unfollowActionCreator(userID)
      dispatch(action)
    },

    setUsers: (users) => {
      const action = setUsersActionCreator(users)
      dispatch(action)
    },

    setMoreUsers: (users) => {
      const action = setMoreUsersActionCreator(users)
      dispatch(action)
    },

    setCurrentPage: (pageNumber) => {
      const action = setCurrentPageActionCreator(pageNumber)
      dispatch(action)
    },

    setTotalUsersCount: (totalUsersCount) => {
      const action = setTotalUsersCountActionCreator(totalUsersCount)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

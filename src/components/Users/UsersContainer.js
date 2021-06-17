import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setMoreUsersActionCreator, setIsFetchingActionCreator, } from "../../redux/usersReducer";
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
      this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
          this.props.setIsFetching(false);
        })
    }
  }

  componentDidUpdate(prevProps) {
    if ((this.props.currentPage !== prevProps.currentPage) && this.isShowMore){
      this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setMoreUsers(response.data.items);
        this.props.setIsFetching(false);
      })
    } else if (this.props.currentPage !== prevProps.currentPage) {
      this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setIsFetching(false);
      })
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
               onShowMoreUsers={this.onShowMoreUsers}
               isFetching={this.props.isFetching}
               setIsFetching={this.props.setIsFetching}/>
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
    isFetching: state.usersPage.isFetching,
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
    },

    setIsFetching: (isFetching) => {  // true/false
      const action = setIsFetchingActionCreator(isFetching) 
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

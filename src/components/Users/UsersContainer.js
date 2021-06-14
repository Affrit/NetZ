import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setMoreUsersActionCreator } from "../../redux/usersReducer";
import Users from "./Users";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default  UsersContainer

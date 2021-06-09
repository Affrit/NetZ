import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state.usersPage.users
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
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default  UsersContainer

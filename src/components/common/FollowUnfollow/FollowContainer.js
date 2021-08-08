import { follow } from "../../../redux/followUnfollowReducer";
import { connect } from "react-redux";
import React from 'react'
import axios from 'axios'
import Follow from './Follow'

class FollowContainer extends React.Component {
  render() {
    return (
      <Follow {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => {
  console.log(state.usersPage.users, 'MPSTPR')
  return {
    users: [...state.usersPage.users]
  }
}

export default connect(mapStateToProps, {follow})(FollowContainer)

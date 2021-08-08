import { unfollow } from "../../../redux/followUnfollowReducer";
import { connect } from "react-redux";
import React from 'react'
import axios from 'axios'
import Unfollow from './Unfollow'

class UnfollowContainer extends React.Component {
  render() {
    return (
      <Unfollow {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: [...state.usersPage.users]
  }
}

export default connect(mapStateToProps, {unfollow})(UnfollowContainer)

import Profile from "./Profile"
import React from "react"
import axios from 'axios'
import { setUserProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  }
}


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

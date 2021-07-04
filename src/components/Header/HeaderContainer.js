import React from "react";
import { connect } from "react-redux";
import Header from './Header'
import { setAuthUserData, setCurrentAuthUser } from '../../redux/authReducer'
import { authAPI, profileAPI } from '../../api/api'

class HeaderContainer extends React.Component {

  componentDidMount() {
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
          let {id, email, login} = data.data
          this.props.setAuthUserData(id, email, login)

          profileAPI.getUserProfile(id)
            .then(data => {
            this.props.setCurrentAuthUser(data)
          })
        }
    })
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    currentAuthUser: state.auth.currentAuthUser,
  }
}

export default connect(mapStateToProps, {setAuthUserData, setCurrentAuthUser})(HeaderContainer)

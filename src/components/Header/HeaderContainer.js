import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Header from './Header'
import { setAuthUserData, setCurrentAuthUser } from '../../redux/authReducer'

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data
          this.props.setAuthUserData(id, email, login)

          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
          .then(response => {
            this.props.setCurrentAuthUser(response.data)
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

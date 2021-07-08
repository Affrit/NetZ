import React from "react";
import { connect } from "react-redux";
import Header from './Header'
import { getAuthUser } from '../../redux/authReducer'

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthUser()
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

export default connect(mapStateToProps, {getAuthUser})(HeaderContainer)

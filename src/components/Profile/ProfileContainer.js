import Profile from "./Profile"
import React from "react"
import axios from 'axios'
import { setUserProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component { // 1-ый контейнер для выполнения запросов

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId ?? this.props.currentAuthUserID}`) // если в url нет id то 2
      .then(response => {
        this.props.setUserProfile(response.data); // данные профиля из  ответа
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentAuthUserID !== prevProps.currentAuthUserID) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.currentAuthUserID}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
    }
  }

  render() {
    return (
      <Profile {...this.props}/> // сама презентационная компонента
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    currentAuthUserID: state.auth.id,
  }
}

let WithURLDataContainerComponent = withRouter(ProfileContainer) // 2-ой контейнер для получения данных из url

export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent) // 3-ий контейнер для общения со стором

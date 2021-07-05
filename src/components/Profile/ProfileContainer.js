import Profile from "./Profile"
import React from "react"
import { setUserProfile, setIsFetching } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { profileAPI } from '../../api/api'

class ProfileContainer extends React.Component { // 1-ый контейнер для выполнения запросов

  componentDidMount() {
      this.props.setIsFetching(true)
      profileAPI.getUserProfile(this.props.match.params.userId ?? this.props.currentAuthUserID) // если в url есть id то показать этого пользователя, иначе показать залогиненого. !!! доработать случай без id и без залогиненого (отправить регестрироваться/логиниться)
      .then(data => {
        this.props.setUserProfile(data);
        this.props.setIsFetching(false) // данные профиля из  ответа
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentAuthUserID !== prevProps.currentAuthUserID) {
      this.props.setIsFetching(true)
      profileAPI.getUserProfile(this.props.currentAuthUserID)
      .then(data => {
        this.props.setUserProfile(data);
        this.props.setIsFetching(false)
      })
    }

    if (this.props.match.params.userId !== prevProps.match.params.userId) { // если поменялся id в url то показать нового
      this.props.setIsFetching(true) 
      profileAPI.getUserProfile(this.props.match.params.userId ?? this.props.currentAuthUserID) // если новый id null/undefined показать залогиненого. !!! доработать случай без id и без залогиненого (отправить регестрироваться/логиниться)
        .then(data => {
        this.props.setUserProfile(data);
        this.props.setIsFetching(false) // данные профиля из  ответа
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
    isFetching: state.profilePage.isFetching,
  }
}

let WithURLDataContainerComponent = withRouter(ProfileContainer) // 2-ой контейнер для получения данных из url

export default connect(mapStateToProps, {setUserProfile, setIsFetching})(WithURLDataContainerComponent) // 3-ий контейнер для общения со стором

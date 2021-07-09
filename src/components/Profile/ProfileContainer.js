import Profile from "./Profile"
import React from "react"
import { getUserProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component { // 1-ый контейнер для выполнения запросов

  componentDidMount() {
    if (this.props.match.params.userId || this.props.currentAuthUserID) { // если убрать то ошибка при обновлении страницы f5
      this.props.getUserProfile(this.props.match.params.userId, this.props.currentAuthUserID)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentAuthUserID !== prevProps.currentAuthUserID) {
      this.props.getUserProfile(this.props.currentAuthUserID)
    }
    if (this.props.match.params.userId !== prevProps.match.params.userId) { // если поменялся id в url то показать нового
      this.props.getUserProfile(this.props.match.params.userId, this.props.currentAuthUserID)
    }
  }

  render() {
    return (
      <Profile {...this.props} /> // сама презентационная компонента
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    currentAuthUserID: state.auth.id,
    isFetching: state.profilePage.isFetching,
    isFetchingAuth: state.auth.isFetching,
    isAuth: state.auth.isAuth,
  }
}

let WithAuthRedirectComponent = withAuthRedirect(ProfileContainer) // 2-ой контейнер для redirect

let WithURLDataContainerComponent = withRouter(WithAuthRedirectComponent) // 3-ий контейнер для получения данных из url

export default connect(mapStateToProps, { getUserProfile })(WithURLDataContainerComponent) // 4-ый контейнер для общения со стором

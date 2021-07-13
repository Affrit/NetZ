import Profile from "./Profile"
import React from "react"
import { getUserProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile }), // 4-ый контейнер для общения со стором
  withRouter, // 3-ий контейнер для получения данных из url
  withAuthRedirect, // 2-ой контейнер для redirect
)(ProfileContainer)
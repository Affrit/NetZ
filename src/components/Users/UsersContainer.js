import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, setPageNumber, choosePageNumberValue, setIsPageSelection, onShowMoreUsers, getUsers, getMoreUsers} from "../../redux/usersReducer";
import React from 'react'
import Users from './Users'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize) // getUsers is thunk
  }

  componentDidUpdate(prevProps) {
    if ((this.props.currentPage !== prevProps.currentPage) && this.props.isShowMore){ // текущая страница измененена нажатием 'showMore'
      this.props.getMoreUsers(this.props.currentPage, this.props.pageSize) // getMoreUsers is thunk
    } else if (this.props.currentPage !== prevProps.currentPage) { // если текущая страница измененена
      this.props.getUsers(this.props.currentPage, this.props.pageSize) // getUsers is thunk
    }
  }

  render() {
    return (
      <div>
        <Users {...this.props}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowInProgress: state.usersPage.isFollowInProgress,
    PageNumberValue: state.usersPage.PageNumberValue,
    isPageSelection: state.usersPage.isPageSelection,
    isShowMore: state.usersPage.isShowMore,
  }
}

// second argument in connect is ation creators
export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, setPageNumber, onShowMoreUsers, choosePageNumberValue, setIsPageSelection, getUsers, getMoreUsers})(UsersContainer)

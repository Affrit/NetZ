import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, setPageNumber, choosePageNumberValue, setIsPageSelection, setIsFollowInProgress, getUsersThunkCreator, getMoreUsersThunkCreator} from "../../redux/usersReducer";
import React from 'react'
import Users from './Users'

class UsersContainer extends React.Component {

  constructor(props) {
    super(props)
    this.isShowMore = false
  }

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }

  componentDidUpdate(prevProps) {
    if ((this.props.currentPage !== prevProps.currentPage) && this.isShowMore){ // текущая страница измененена нажатием 'showMore'
      this.props.getMoreUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    } else if (this.props.currentPage !== prevProps.currentPage) { // если текущая страница измененена
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }
  }

  onPageChanged = (page) => {
    this.isShowMore = false
    this.props.setCurrentPage(page)
  }

  onShowMoreUsers = () => {
    this.isShowMore = true
    this.props.setCurrentPage(this.props.currentPage + 1)
  }

  render() {
    return (
      <div>
        <Users setCurrentPage={this.props.setCurrentPage}
               currentPage={this.props.currentPage} 
               totalUsersCount={this.props.totalUsersCount}
               users={this.props.users} 
               pageSize={this.props.pageSize}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               onPageChanged={this.onPageChanged}
               onShowMoreUsers={this.onShowMoreUsers}
               isFetching={this.props.isFetching}
               setIsFetching={this.props.setIsFetching}
               isFollowInProgress={this.props.isFollowInProgress}
               setIsFollowInProgress={this.props.setIsFollowInProgress}
               setPageNumber={this.props.setPageNumber}
               choosePageNumberValue={this.props.choosePageNumberValue}
               PageNumberValue={this.props.PageNumberValue}
               isPageSelection={this.props.isPageSelection}
               setIsPageSelection={this.props.setIsPageSelection}
               />
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
  }
}

// second argument in connect is ation creators
export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, setPageNumber, choosePageNumberValue, setIsPageSelection, setIsFollowInProgress, getUsersThunkCreator, getMoreUsersThunkCreator})(UsersContainer)

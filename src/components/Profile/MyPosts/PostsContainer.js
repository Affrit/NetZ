import Posts from "./Posts"
import { addPostActionCreator, } from '../../../redux/profileReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      const action = addPostActionCreator(postText)
      dispatch(action)
    },
  }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)

export default PostsContainer

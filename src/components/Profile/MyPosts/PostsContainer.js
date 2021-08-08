import Posts from "./Posts"
import { addNewPost, } from '../../../redux/profileReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}

const PostsContainer = connect(mapStateToProps, { addNewPost })(Posts)

export default PostsContainer

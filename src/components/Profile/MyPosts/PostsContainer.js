import React from 'react'
import Posts from "./Posts"
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      const action = addPostActionCreator()
      dispatch(action)
    },
    updateNewPostText: (text) => {
      const action = updateNewPostTextActionCreator(text)
      dispatch(action)
    }
  }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)

export default PostsContainer

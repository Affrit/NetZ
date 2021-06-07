import React from 'react'
import Posts from "./Posts"
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'

const PostsContainer = (props) => {
  let state = props.store.getState()

  const changeNewPostText = (text) => {
    const action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action)
  }

  const addPost = () => {
    const action = addPostActionCreator()
    props.store.dispatch(action)
  }

  return (
    <Posts updateNewPostText={changeNewPostText} addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}/>
  )
}

export default PostsContainer

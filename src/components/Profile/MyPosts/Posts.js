import Post from './Post/Post'
import s from './Posts.module.css'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'

const Posts = (props) => {
  const newPost = React.useRef()

  const addPost = () => {
    const action = addPostActionCreator()
    props.dispatch(action)
  }

  const changeNewPostText = () => {
    let text = newPost.current.value
    const action = updateNewPostTextActionCreator(text)
    props.dispatch(action)
  }

    return (
        <div className={s.item}>
          <h3 className={s.title}>New Post</h3>
          <div className={s.newPost}>
            <div className={s.newPost__area}>
              <textarea onChange={changeNewPostText} value={props.newPostText} ref={newPost} className={s.post__textarea} placeholder="New Post" rows="10"></textarea>
            </div>
            <div className={s.newPost__buttons}>
              <button onClick={ addPost } className={s.newPost__button}>Add post</button> <button className={s.newPost__button}>delete</button>
            </div>
          </div>
          {props.posts.map(post => <Post key={post.id} message={post.message} likes={post.likes} reposts={post.reposts}/>).reverse()}
        </div>
    )
}

export default Posts

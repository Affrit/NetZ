import Post from './Post/Post'
import s from './Posts.module.css'
import React from 'react'

const Posts = (props) => {
  const newPost = React.useRef()

  const addPost = () => {
    props.addPost()
  }

  const changeNewPostText = () => {
    let text = newPost.current.value
    props.updateNewPostText(text)
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

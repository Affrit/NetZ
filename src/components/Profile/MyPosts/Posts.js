import Post from './Post/Post'
import s from './Posts.module.css'
import React from 'react'

const Posts = (props) => {
  const newPost = React.useRef()
  const addPost = () => {
    let text = newPost.current.value
    props.addPost(text)
  }
    return (
        <div className={s.item}>
          <h3 className={s.title}>New Post</h3>
          <div className={s.newPost}>
            <div className={s.newPost__area}>
              <textarea ref={newPost} className={s.post__textarea} placeholder="New Post" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className={s.newPost__buttons}>
              <button onClick={ addPost } className={s.newPost__button}>Add post</button> <button className={s.newPost__button}>delete</button>
            </div>
          </div>
          {props.posts.map(post => <Post key={post.id} message={post.message} likes={post.likes} reposts={post.reposts}/>)}
        </div>
    )
}

export default Posts

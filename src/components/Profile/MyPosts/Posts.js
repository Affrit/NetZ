import Post from './Post/Post'
import s from './Posts.module.css'
import React from 'react'

const Posts = (props) => {
  const newPost = React.useRef()
  const onAddPost = () => {
    props.addPost()
  }

  const onChangeNewPostText = () => {
    let text = newPost.current.value
    props.updateNewPostText(text)
  }

    return (
        <div className={s.item}>
          <h3 className={s.title}>New Post</h3>
          <div className={s.newPost}>
            <div className={s.newPost__area}>
              <textarea onChange={onChangeNewPostText} value={props.newPostText} ref={newPost} className={s.post__textarea} placeholder="New Post" rows="10"></textarea>
            </div>
            <div className={s.newPost__buttons}>
              <button onClick={ onAddPost } className={s.newPost__button}>Add post</button>
            </div>
          </div>
          <div className={s.posts}>
            {props.posts.map(post => <Post key={post.id} message={post.message} likes={post.likes} reposts={post.reposts}/>)}
          </div>
        </div>
    )
}

export default Posts

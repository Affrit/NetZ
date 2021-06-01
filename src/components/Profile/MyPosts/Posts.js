import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = (props) => {
    return (
        <div className={s.item}>
          <h3 className={s.title}>New Post</h3>
          <div className={s.newPost}>
            <div className={s.newPost__area}>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className={s.newPost__buttons}>
              <button className={s.newPost__button}>Add post</button> <button className={s.newPost__button}>delete</button>
            </div>
            
          </div>
          {props.posts.map(post => <Post key={post.id} message={post.message} likes={post.likes} reposts={post.reposts}/>)}
        </div>
    )
}

export default Posts

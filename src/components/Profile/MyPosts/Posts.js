import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = () => {
    return (
        <div className={s.item}>
          New Post
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
            <button>delete</button>
          </div>
          <Post />
          <Post />
          <Post />
        </div>
    )
}

export default Posts

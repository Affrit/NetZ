import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = () => {
    return (
        <div className={s.item}>
          New Post
          <div className={s.newPost}>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
            <button>delete</button>
          </div>
          <Post message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.' likes='33' reposts='25'/>
          <Post message='Wow this is second post' likes='8' reposts='0'/>
          <Post message="it's realy working!!!" likes='10' reposts='9'/>
        </div>
    )
}

export default Posts

import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = () => {
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

import Posts from './MyPosts/Posts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <Posts posts={props.state.posts} addPost={props.addPost}/>
    </div>
   )
}

export default Profile

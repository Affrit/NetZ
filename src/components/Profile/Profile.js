import PostsContainer from './MyPosts/PostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <PostsContainer store={props.store}/>
    </div>
   )
}

export default Profile

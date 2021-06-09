import PostsContainer from './MyPosts/PostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <PostsContainer />
    </div>
   )
}

export default Profile

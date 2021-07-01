import PostsContainer from './MyPosts/PostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  console.log(props)
  return (
    <div className={s.profile}>
      <ProfileInfo profile={props.profile}/>
      <PostsContainer />
    </div>
   )
}

export default Profile

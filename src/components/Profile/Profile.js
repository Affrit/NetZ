import Preloader from '../common/Preloader/Preloader'
import PostsContainer from './MyPosts/PostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  if (props.isFetching) return <Preloader />
  return (
      <div className={s.profile}>
        <ProfileInfo profile={props.profile} isFetching={props.isFetching} 
        status={props.status} updateUserStatus={props.updateUserStatus}/>
        <PostsContainer />
      </div>
  )
}

export default Profile

import { Redirect } from 'react-router-dom'
import PostsContainer from './MyPosts/PostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    !props.isAuth ? <Redirect to='/login' /> :
      <div className={s.profile}>
        <ProfileInfo profile={props.profile} isFetching={props.isFetching} />
        <PostsContainer />
      </div>
  )
}

export default Profile

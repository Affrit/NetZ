import Posts from './MyPosts/Posts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
    return (
      <div className={s.profile}>
        <ProfileInfo />
        <Posts />
      </div>
    )
}

export default Profile

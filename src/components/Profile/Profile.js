import Posts from './MyPosts/Posts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
      <div className={s.profile}>
        <ProfileInfo />
        <Posts posts={props.posts}/>
      </div>
    )
}

export default Profile

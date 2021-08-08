import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import userPhoto from '../../../assets/img/userPhoto.jpg'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {
  return (
    <>
      {props.isFetching || !props.profile ? <Preloader /> :
        <div className={s.profile}>
          <div className={s.content__description}>
            <div className={s.profileAvatar}>
              <img src={props.profile.photos?.large ?? props.profile.photos?.small ?? userPhoto} alt="#" />
            </div>
            <div className={s.description}>
              <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
              {props.profile.fullName ? <span className={s.description__item_fullName}>{props.profile.fullName}</span> : ''}
              {props.profile.aboutMe ? <span className={s.description__item}>About me: {props.profile.aboutMe}</span> : ''}
              {props.profile.lookingForAJob ? <span className={s.description__item}>lookingForAJob: Yes</span> : <span>lookingForAJob: No</span>}
              <span className={s.contacts__title}>CONTACTS:</span>
              {Object.entries(props.profile.contacts).map(contact => {
                return contact[1] ?
                  <span key={props.profile.userId} className={s.description__item}>{contact[0]} :
                  {contact[1]}</span> : ''
              })}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ProfileInfo

import s from './FollowUnfollow.module.css'

const Follow = (props) => {
  return (
    <>
    <button onClick={() => props.unfollow(props.userId)} className={s.user__button}>unfollow</button>
    </>
  )
}

export default Follow

import s from './FollowUnfollow.module.css'

const Follow = (props) => {
  console.log(props)
  return (
    <>
    <button onClick={() => props.follow(props.userId)} className={s.user__button}>follow</button>
    </>
  )
}

export default Follow

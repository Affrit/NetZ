import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to='/login' />
    return (
      <Component {...props}/>
    )
  }

  let mapStateToProps = (state) => {
    return {
      isFetchingAuth: state.auth.isFetching,
      isAuth: state.auth.isAuth,
    }
  }

  return connect(mapStateToProps)(RedirectComponent)
}

export default withAuthRedirect
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
  
}

const followUnfollowReducer = (state = initialState, action) => {
  console.log(state.users)
  switch(action.type){
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(user => {
          return user.id === action.userID ? {...user, followed: true} : user
        })
      }

    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(user => {
          return user.id === action.userID ? {...user, followed: false} : user
        })
      }

    default: return state
  }
}

export const follow = (userID) => ({type: FOLLOW, userID})
export const unfollow = (userID) => ({type: UNFOLLOW, userID})

export default followUnfollowReducer

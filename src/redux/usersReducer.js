const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_MORE_USERS = 'SET_MORE_USERS'
const IS_FETCHING = 'IS_FETCHING'


let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
}

const usersReducer = (state = initialState, action) => {
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

    case 'SET_USERS':
    return {
      ...state,
      users: [...action.users],  // перезатирает старых юзеров. users: [...state.users, ...action.users] позволит добавлять в конец 
    }

    case 'SET_MORE_USERS':
    return {
      ...state,
      users: [...state.users, ...action.users],
    }

    case 'SET_TOTAL_USERS_COUNT':
    return {
      ...state,
      totalUsersCount: action.totalUsersCount,
    }

    case 'SET_CURRENT_PAGE':
    return {
      ...state,
      currentPage: action.pageNumber,
    }

    case 'IS_FETCHING':
    return {
      ...state,
      isFetching: action.isFetching,
    }

    default: return state
  }
}

export const followActionCreator = (userID) => ({type: FOLLOW, userID})
export const unfollowActionCreator = (userID) => ({type: UNFOLLOW, userID})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})
export const setMoreUsersActionCreator = (users) => ({type: SET_MORE_USERS, users})
export const setCurrentPageActionCreator = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsFetchingActionCreator = (isFetching) => ({type: IS_FETCHING, isFetching})

export default usersReducer

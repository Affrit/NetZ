import { authAPI, profileAPI } from '../api/api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_CURRENT_AUTH_USER = 'SET_CURRENT_AUTH_USER'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  currentAuthUser: null,
  isFetching: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH_USER_DATA':
      return {
        ...state,
        ...action.data,
      }

    case 'SET_CURRENT_AUTH_USER':
      return {
        ...state,
        currentAuthUser: action.userData,
      }

    case 'SET_IS_FETCHING': // загружается ли контент
      return {
        ...state,
        isFetching: action.isFetching,
      }

    default: return state
  }
}

// action creators

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, data: { id, email, login, isAuth } })
export const setCurrentAuthUser = (userData) => ({ type: SET_CURRENT_AUTH_USER, userData })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

// thunk

export const getAuthUser = () => (dispatch) => {
  dispatch(setIsFetching(true))
  authAPI.authMe().then(data => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data
      dispatch(setAuthUserData(id, email, login, true))
      profileAPI.getUserProfile(id)
        .then(data => {
          dispatch(setCurrentAuthUser(data))
          dispatch(setIsFetching(false))
        })
    }
    dispatch(setIsFetching(false))
  })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(getAuthUser())
    }
  })
}

export const logout = () => (dispatch) => {
  authAPI.logout().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}

export default authReducer

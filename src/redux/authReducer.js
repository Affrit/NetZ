const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_CURRENT_AUTH_USER = 'SET_CURRENT_AUTH_USER'

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  currentAuthUser: null,
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_AUTH_USER_DATA':
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }

    case 'SET_CURRENT_AUTH_USER':
      return {
        ...state,
        currentAuthUser: action.userData,
      }
      
    default: return state
  }
}

export const setAuthUserData = (id, email, login) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}})
export const setCurrentAuthUser = (userData) => ({type: SET_CURRENT_AUTH_USER, userData})

export default authReducer

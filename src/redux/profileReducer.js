import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialState = {
  posts: [
    {
      id: 1, message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.`, likes: 33, reposts: 25
    },
    { id: 2, message: 'Wow this is second post', likes: 8, reposts: 0 },
    { id: 3, message: "it's realy working!!!", likes: 10, reposts: 9 },
  ],
  newPostText: '',
  profile: null,
  isFetching: false,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-POST': {
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likes: 0,
        reposts: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    }

    case 'UPDATE-NEW-POST-TEXT':
      return {
        ...state,
        newPostText: action.text
      }

    case 'SET_USER_PROFILE':
      return {
        ...state,
        profile: action.profile
      }

    case 'SET_IS_FETCHING': // загружается ли контент
      return {
        ...state,
        isFetching: action.isFetching,
      }

    default: return state
  }
}

// ActionCreators
// убрать ActionCreator в названии
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

// thunks

export const getUserProfile = (matchUserID, currentAuthUserID) => (dispatch) => {
  dispatch(setIsFetching(true))
  profileAPI.getUserProfile(matchUserID ?? currentAuthUserID) // если в url есть id то показать этого пользователя, иначе показать залогиненого. !!! доработать случай без id и без залогиненого (отправить регестрироваться/логиниться)
    .then(data => {
      dispatch(setUserProfile(data)) // данные профиля из  ответа
      dispatch(setIsFetching(false)) 
    })
}

export default profileReducer
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
    {id: 1, message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.`, likes: 33, reposts: 25},
    {id: 2, message: 'Wow this is second post', likes: 8, reposts: 0},
    {id: 3, message: "it's realy working!!!", likes: 10, reposts: 9},
  ],
  newPostText: '',
  profile: null, 
}

const profileReducer = (state = initialState, action) => {
  switch(action.type){
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
      
    default: return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer
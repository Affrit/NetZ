const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    {id: 1, message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.`, likes: 33, reposts: 25},
    {id: 2, message: 'Wow this is second post', likes: 8, reposts: 0},
    {id: 3, message: "it's realy working!!!", likes: 10, reposts: 9},
  ],
  newPostText: ''
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
      let stateCopy = {...state}
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = ''
      return stateCopy
    }

    case 'UPDATE-NEW-POST-TEXT': {
      let stateCopy = {...state}
      stateCopy.newPostText = action.text
      return stateCopy
    }
      
    default: return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

export default profileReducer
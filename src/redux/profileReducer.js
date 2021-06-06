const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
  switch(action.type){
    case 'ADD-POST':
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likes: 0,
        reposts: 0,
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state

    case 'UPDATE-NEW-POST-TEXT':
      state.newPostText = action.text
      return state
      
    default: return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

export default profileReducer
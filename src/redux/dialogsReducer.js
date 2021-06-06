const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
  switch(action.type){

    case 'ADD-MESSAGE':
      let newMessage = {
        id: state.messageData.length + 1,
        text: state.newMessageText,
      }
      state.messageData.push(newMessage)
      state.newMessageText = ''
      return state

    case 'UPDATE-NEW-MESSAGE-TEXT':
      state.newMessageText = action.text
      return state

    default: return state
  }
}

export const addMesssageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})

export default dialogsReducer
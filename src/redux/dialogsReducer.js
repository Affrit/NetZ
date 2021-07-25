import {reset} from 'redux-form';

const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
  dialogsData: [
    {id: 1, name: 'Julia', avatar: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg'},
    {id: 2, name: 'Stas', avatar: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg'},
    {id: 3, name: 'Dima', avatar: 'https://www.blast.hk/attachments/64805/'},
    {id: 4, name: 'Andrey', avatar: 'https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png'},
    {id: 5, name: 'Sergey', avatar: 'https://www.meme-arsenal.com/memes/f71dd3da1aba42eb46ca90a8149242d0.jpg'},
  ],
  messageData: [
    {id: 1, text: 'Hello'},
    {id: 2, text: 'How are you?'},
    {id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iusto quia nemo, earum nisi autem molestiae? Necessitatibus labore ad voluptatibus odit numquam earum, eaque obcaecati quod, accusantium qui ducimus eligendi?'},
  ],
}

const dialogsReducer = (state = initialState, action) => {
  switch(action.type){

    case 'ADD-MESSAGE':
      let newMessage = {
        id: state.messageData.length + 1,
        text: action.newMessageText,
      }
      return {
        ...state,
        messageData: [...state.messageData, newMessage],
      }

    default: return state
  }
}

export const addMesssageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})

export const addNewMessage = (newMessageText) => (dispatch) => {
  dispatch(addMesssageActionCreator(newMessageText))
  dispatch(reset('NewMessageForm'));  // requires form name
}

export default dialogsReducer
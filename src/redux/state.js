let store = {
  _state: {
    dialogsPage: {
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
      newMessageText: '',
    },
    profilePage: {
      posts: [
        {id: 1, message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.`, likes: 33, reposts: 25},
        {id: 2, message: 'Wow this is second post', likes: 8, reposts: 0},
        {id: 3, message: "it's realy working!!!", likes: 10, reposts: 9},
      ],
      newPostText: ''
    },
    sideBar: {
      friends: [
        {id: 1, name: 'Julia', avatar: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg'},
        {id: 2, name: 'Stas', avatar: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg'},
        {id: 3, name: 'Dima', avatar: 'https://www.blast.hk/attachments/64805/'},
        {id: 4, name: 'Andrey', avatar: 'https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png'},
        {id: 5, name: 'Sergey', avatar: 'https://www.meme-arsenal.com/memes/f71dd3da1aba42eb46ca90a8149242d0.jpg'},
      ]
    },
  },

  get state(){
    return this._state
  },

  addMessage(){
    let newMessage = {
      id: this._state.dialogsPage.messageData.length + 1,
      text: this._state.dialogsPage.newMessageText,
    }
    this._state.dialogsPage.messageData.push(newMessage)
    this._state.dialogsPage.newMessageText = ''
    this._RenderEntrieTree(this._state)
  },

  updateNewMessageText(text){
    this._state.dialogsPage.newMessageText = text
    this._RenderEntrieTree(this._state)
  },

  addPost(){
    let newPost = {
      id: this._state.profilePage.posts.length + 1,
      message: this._state.profilePage.newPostText,
      likes: 0,
      reposts: 0,
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._RenderEntrieTree(this._state)
  },

  updateNewPostText(text){
    this._state.profilePage.newPostText = text
    this._RenderEntrieTree(this._state)
  },

  _RenderEntrieTree(){},

  subscribe(observer){
    this._RenderEntrieTree = observer
  }
}

export default store

/*
let RenderEntrieTree = () => {} // функция заглушка. паттерн observer

export const subscribe = (observer) => { // создали функцию, которая будет вызывана в index.js где ей аргументом передали функцию 
  RenderEntrieTree = observer           // рендера, присвоили функции заглушке функцию рендера из index.js и теперь при вызове 
                                       // заглушки в этом файле вызывается функция рендера из файла index.js. паттерн observer
}

let state = {
  dialogsPage: {
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
    newMessageText: '',
  },
  profilePage: {
    posts: [
      {id: 1, message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est magni nobis distinctio eligendi, aliquam mollitia, consectetur quia necessitatibus facere laborum architecto! Dolor odit quidem, nisi esse magnam quas quibusdam.`, likes: 33, reposts: 25},
      {id: 2, message: 'Wow this is second post', likes: 8, reposts: 0},
      {id: 3, message: "it's realy working!!!", likes: 10, reposts: 9},
    ],
    newPostText: ''
  },
  sideBar: {
    friends: [
      {id: 1, name: 'Julia', avatar: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg'},
      {id: 2, name: 'Stas', avatar: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg'},
      {id: 3, name: 'Dima', avatar: 'https://www.blast.hk/attachments/64805/'},
      {id: 4, name: 'Andrey', avatar: 'https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png'},
      {id: 5, name: 'Sergey', avatar: 'https://www.meme-arsenal.com/memes/f71dd3da1aba42eb46ca90a8149242d0.jpg'},
    ]
  },
}

export const addMessage = () => {
  let newMessage = {
    id: state.dialogsPage.messageData.length + 1,
    text: state.dialogsPage.newMessageText,
  }
  state.dialogsPage.messageData.push(newMessage)
  state.dialogsPage.newMessageText = ''
  RenderEntrieTree(state)
}

export const updateNewMessageText = (text) => {
  state.dialogsPage.newMessageText = text
  RenderEntrieTree(state)
}

export const addPost = () => {
  let newPost = {
    id: state.profilePage.posts.length + 1,
    message: state.profilePage.newPostText,
    likes: 0,
    reposts: 0,
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  RenderEntrieTree(state)
}

export const updateNewPostText = (text) => {
  state.profilePage.newPostText = text
  RenderEntrieTree(state)
}

export default state
*/

let initialState = {
  friends: [
    {id: 1, name: 'Julia', avatar: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg'},
    {id: 2, name: 'Stas', avatar: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg'},
    {id: 3, name: 'Dima', avatar: 'https://www.blast.hk/attachments/64805/'},
    {id: 4, name: 'Andrey', avatar: 'https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png'},
    {id: 5, name: 'Sergey', avatar: 'https://www.meme-arsenal.com/memes/f71dd3da1aba42eb46ca90a8149242d0.jpg'},
  ]
}

const sideBarReducer = (state = initialState, action) => {
  switch(action.type){
    default: return state
  }
}

export default sideBarReducer
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'
import RenderEntrieTree from './render'
import { addPost, addMessage, updateNewPostText, updateNewMessageText } from './redux/state'



RenderEntrieTree(state, addPost, updateNewPostText, updateNewMessageText, addMessage)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

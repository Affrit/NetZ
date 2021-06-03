import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



const RenderEntrieTree = (state, addPost, updateNewPostText, updateNewMessageText, addMessage) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} addMessage={addMessage}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

export default RenderEntrieTree
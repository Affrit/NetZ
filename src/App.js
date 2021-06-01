import './App.css'
import Profile from './components/Profile/Profile.js';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile posts={props.posts}/>} />
          <Route path='/dialogs' render={ () => <Dialogs messageData={props.messageData} dialogsData={props.dialogsData}/>} />
          <Route path='/news' component={News} />
          <Route path='/musik' component={Musik} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

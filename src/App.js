import './App.css'
import Profile from './components/Profile/Profile.js';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';

function App(props) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.state.sideBar}/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile state={props.state.profilePage} addPost={props.addPost}/>} />
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/>} />
          <Route path='/news' component={News} />
          <Route path='/musik' component={Musik} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  )
}

export default App;

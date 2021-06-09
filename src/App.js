import './App.css'
import Profile from './components/Profile/Profile.js';
import Header from './components/Header/Header.js';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer'

function App() {
  
  return (
      <div className='app-wrapper'>
        <Header />
        <NavContainer />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile />} />
          <Route path='/dialogs' render={ () => <DialogsContainer />} />
          <Route path='/users' render={ () => <UsersContainer />} />
          <Route path='/news' component={News} />
          <Route path='/musik' component={Musik} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  )
}

export default App;

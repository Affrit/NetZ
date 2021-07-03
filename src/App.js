import './App.css'
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavContainer />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
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

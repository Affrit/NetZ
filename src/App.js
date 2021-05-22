import './App.css'
import Profile from './components/Profile/Profile.js';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Profile />
      </div>
      <Dialogs />
    </div>
  )
}

export default App;

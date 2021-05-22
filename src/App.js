import './App.css'
import Profile from './components/Profile/Profile.js';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  )
}

export default App;

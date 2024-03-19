import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Subscriptions from './pages/Subscriptions.js';
import './pages/user-homepage.js'

function App() {
  let component
  // eslint-disable-next-line default-case
  switch (window.location.pathname) {
    case '/':
      component = <App />
      break
    case '/Login':
       // eslint-disable-next-line react/jsx-no-undef
      component = <Login />
      break 
    case '/UserHomepage':
      // eslint-disable-next-line react/jsx-no-undef
      component = user-homepage < />
      break
    case '/subscriptions':
      // eslint-disable-next-line react/jsx-no-undef
      component = <Subscriptions />
      break
  }
  return (
    <>
      <Navbar />
      {component}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fame Tracker
        </p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          Unlock your musics potential<br></br>
          with<br></br>
          Fame Tracker<br></br>
          Elevate your Presence!<br></br>
          Expand your Reach!<br></br>
        </a>
      </header>
    </div></>
  );

}



export default App;

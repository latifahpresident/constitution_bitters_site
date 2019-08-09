import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import LandingPage from './views/landing-page/LandingPage';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path = '/' render={(props) => <LandingPage {...props}/>} />
    </div>
  );
}

export default App;

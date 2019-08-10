import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import LandingPage from './views/landing-page/LandingPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path = '/' render={(props) => <LandingPage {...props}/>} />
    </div>
  );
}

export default App;

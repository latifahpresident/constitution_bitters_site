import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './views/landing-page/LandingPage';

function App() {
  return (
    <div className="App">
      <Route
        exact path = '/'
        render={(props) => <LandingPage {...props}/>}
      />
  
    </div>
  );
}

export default App;

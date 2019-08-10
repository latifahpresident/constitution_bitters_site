import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import LandingPage from './views/landing-page/LandingPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path = '/' render={(props) => <LandingPage {...props}/>} />
      <Footer />
    </div>
  );
}

export default App;

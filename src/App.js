import React, { useState } from 'react';
import './App.css';
import EventPage from './components/EventPage';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import { Route, Link, Redirect, Switch, withRouter, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isRedirected, setRedirect] = useState(false);

  return (
    <div className="App">
      <Navbar loggedIn={isLoggedIn} handleClick={() => setRedirect(true)}/>
      <Router>
        <Switch>
              <Route path="/login" render={() => <LoginPage />}/>
              <Route path="/" render={() => isRedirected ? <Redirect to={{ pathname: '/login' }} /> : <EventPage />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

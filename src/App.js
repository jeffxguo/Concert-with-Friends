import React, { useState } from 'react';
import './App.css';
import './index.css';
import EventPage from './components/EventPage';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import EventCard from './components/Card';
import { Route, Link, Redirect, Switch, withRouter, BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { COLORS } from './constants/Colors';
import "./index.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isRedirected, setRedirect] = useState(false);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar loggedIn={isLoggedIn} handleClick={() => setRedirect(true)} />
        <Router>
          <Switch>
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="/" render={() => isRedirected ? <Redirect to={{ pathname: '/login' }} /> : <EventPage />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

const theme = createMuiTheme({
  typography: {
    "fontFamily": `"Open Sans", "Helvetica", "Arial", sans-serif`,
    "fontSize": 18,
    "color": COLORS.black,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    h2: {
      fontSize: 20,
      fontWeight: 700,
    },
    h1: {
      fontSize: 40,
      fontWeight: 700,
      fontFamily: "Helvetica"
    }
  }
});


export default App;

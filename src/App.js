import React, { useState } from 'react';
import './App.css';
import './index.css';
import EventPage from './components/EventPage';
import LoginPage from './components/LoginPage';
import ProfileGroupsPage from './components/ProfileGroupsPage';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import MapPage from './components/MapPage';

import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { COLORS } from './constants/Colors';
import "./index.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [redirectTo, setRedirect] = useState("");
  const [isProfileOpen, setProfile] = useState(false);
  const handleClick = (page) => {
    alert(page)
    setRedirect(page)
  }
  return (
    <div className="App" style={{ minWidth: "1300px" }}>
      <ThemeProvider theme={theme}>
        <Router>

          <Navbar loggedIn={isLoggedIn} handleClick={handleClick} handleClickLogin={() => setLoggedIn(true)} handleLogout={() => setLoggedIn(false)} handleOpenProfile={() => setProfile(true)} />
          <Profile isOpen={isProfileOpen} handleCloseProfile={() => setProfile(false)} />
          <Switch>
            <Route path='/' exact component={EventPage} />
            <Route path='/Home' exact component={EventPage} />
            <Route path='/login' exact>
              <LoginPage handleLoginSubmit={() => { setLoggedIn(true); setRedirect(""); }} />
            </Route>
            <Route path='/map' exact component={MapPage} />
            <Route path='/mygroups' exact component={ProfileGroupsPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );

}

const redirectToComponent = (redirectTo) => {
  switch (redirectTo) {
    case "":
      return <EventPage />;
    case "login":
      return <Redirect to={{ pathname: '/login' }} />;
    case "groups":
      return <Redirect to={{ pathname: '/groups' }} />;
    case "maps":
      return <Redirect to={{ pathname: '/maps' }} />;
  }
}

const theme = createMuiTheme({
  typography: {
    "fontFamily": `"Open Sans", "Helvetica", "Arial", sans-serif`,
    "fontSize": 16,
    "color": COLORS.black,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    h2: {
      fontSize: "1.4em",
      fontWeight: 700,
    },
    h1: {
      fontSize: "2.4em",
      fontWeight: 700,
      fontFamily: "Helvetica"
    }
  }
});


export default App;

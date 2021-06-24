import React, { useState } from 'react';
import './App.css';
import './index.css';
import EventPage from './components/EventPage';
import LoginPage from './components/LoginPage';
import ProfileGroupsPage from './components/ProfileGroupsPage';
import Navbar from './components/Navbar';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { COLORS } from './constants/Colors';
import "./index.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [redirectTo, setRedirect] = useState("");

  return (
    <div className="App" style={{ minWidth: "1300px" }}>
      <ThemeProvider theme={theme}>
        <Navbar loggedIn={isLoggedIn} handleClickLogin={() => setRedirect("login")} handleClickGroups={() => setRedirect("groups")} handleLogout={() => setLoggedIn(false)}/>
        <Router>
          <Switch>
            <Route path="/login" render={() => redirectTo === "login" ? <LoginPage handleLoginSubmit={() => {setLoggedIn(true); setRedirect(""); }} /> : redirectToComponent(redirectTo)} />
            <Route path="/groups" render={() => redirectTo === "groups" ? <EventPage /> : redirectToComponent(redirectTo)} />
            <Route path="/" render={() => redirectToComponent(redirectTo)} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );

}

const redirectToComponent = (redirectTo) => {
  switch(redirectTo) {
    case "":
      return <EventPage />;
    case "login":
      return <Redirect to={{ pathname: '/login' }} />;
    case "groups":
      return <Redirect to={{ pathname: '/groups' }} />;
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

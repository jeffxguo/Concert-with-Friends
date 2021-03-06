import React, { useState, useEffect } from 'react';
import EventPage from './components/EventPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import MapPage from './components/MapPage';
import MyGroupsPage from './components/MyGroupsPage';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { COLORS } from './constants/Colors';
import { history } from './helpers/history';
import { getWithExpiry } from './helpers/session-expire';
import { alertActions } from './actions/alert.actions';

import './App.css';
import './index.css';

function App() {
  const [isProfileOpen, setProfile] = useState(false);
  const loggedIn = useSelector(state => state.user.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0)
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <div className="App" style={{ minWidth: "1300px" }}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Navbar handleOpenProfile={() => setProfile(true)} />
          {loggedIn && <Profile isOpen={isProfileOpen} handleCloseProfile={() => setProfile(false)} />}
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/home' exact component={EventPage} />
            <Route path='/map' exact component={MapPage} />
            <Route path='/login' exact>
              <LoginPage />
            </Route>
            <Route path='/register' exact>
              <SignupPage />
            </Route>
            <PrivateRoute path='/mygroups' exact component={MyGroupsPage} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );

}

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      if (!getWithExpiry('user')) {
        // not logged in so redirect to login page with the return url
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }
      // logged in so return component
      return <Component {...props} />
    }} />
  );
}

const theme = createMuiTheme({
  typography: {
    "fontFamily": `"Open Sans", "Helvetica", "Arial", sans-serif`,
    "fontSize": "1.1em",
    "color": COLORS.black,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    h2: {
      fontSize: "1.3em",
      fontWeight: 700,
    },
    h1: {
      fontSize: "1.8em",
      fontWeight: 700,
      fontFamily: "Helvetica"
    }
  }
});


export default App;

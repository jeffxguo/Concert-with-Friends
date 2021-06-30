import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import EventPage from './components/EventPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ProfileGroupsPage from './components/ProfileGroupsPage';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import MapPage from './components/MapPage';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { COLORS } from './constants/Colors';
import "./index.css";
import { history } from './helpers/history';
import { alertActions } from './actions/alert.actions';

function App() {
  const [isProfileOpen, setProfile] = useState(false);
  const loggedIn = useSelector(state => state.login.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }, []);

  return (
    <div className="App" style={{ minWidth: "1300px" }}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Navbar handleOpenProfile={() => setProfile(true)} />
          { loggedIn && <Profile isOpen={isProfileOpen} handleCloseProfile={() => setProfile(false)} />}
          <Switch>
            <Route path='/' exact component={EventPage} />
            <Route path='/home' exact component={EventPage} />
            <Route path='/map' exact component={MapPage} />
            <Route path='/login' exact>
              <LoginPage />
            </Route>
            <Route path='/register' exact>
              <SignupPage />
            </Route>
            <PrivateRoute path='/mygroups' exact component={ProfileGroupsPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );

}

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  return (
      <Route {...rest} render={props => {
          if (!localStorage.getItem('user')) {
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

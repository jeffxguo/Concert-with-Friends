
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import alert from './reducers/alert.reducer';
import signup from './reducers/signup.reducer';
import login from './reducers/login.reducer';

const rootReducer = combineReducers({
  alert,
  signup,
  login
});

const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;

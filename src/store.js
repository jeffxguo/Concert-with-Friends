
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import alert from './reducers/alert.reducer';
import signup from './reducers/signup.reducer';
import user from './reducers/user.reducer';

const rootReducer = combineReducers({
  alert,
  signup,
  user
});

const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;

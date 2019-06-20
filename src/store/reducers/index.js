
import { combineReducers } from 'redux';

import auth from './auth';
import githubApi from './githubApi';
import system from './system';
import user from './user';

const initialState = {
  updated: Date.now(),
}

const top = (state = initialState, action) => {
  // console.log('top reducer', action);
  switch (action.type) {   
    default:
      return state
  }
}

const rootReducer = combineReducers({
  top,
  auth,
  githubApi,
  system,
  user,
})

export default rootReducer;

import React, { Component } from 'react';
import logo from './logo.svg';
import './css/reset.css';
import './css/App.css';
import { Provider} from 'react-redux';
import Dictaphone from './components/dictaphone.jsx';
import NavBar from './components/nav_bar/nav_bar';
import Home from './components/home';
import SearchIndexContainer from './components/recipes/search_results_index_container';
import BackupRecipeShowContainer from './components/recipes/backup_recipe_show_container';
import ConfigureStore from "./store/store";
import SignupFormContainer from "./components/session_form/signup_form_container";
import SearchContainer from "./components/search_form/search_form_container";

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';



// need to get this working from the example at
// https://github.com/znrm/typedraw/blob/master/src/App.js
// for frontend auth
//--------------------------
// const checkForCurrentUser = async () => {
//   const token = await getAuthToken();
//   if (token) {
//     fetchCurrentSession({ Authorization: token })(store.dispatch);
//   }
// };


import jwt_decode from "jwt-decode";
import * as APIUtil from "./util/session_api_util";
import * as SessionActions from "./actions/session_actions";
import { AuthRoute, ProtectedRoute } from "./util/route_util";

const store = ConfigureStore();
if (localStorage.jwtToken) {
  // Set auth token header auth
  APIUtil.setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(SessionActions.fetchCurrentUser(decoded)); //APIUtil.setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(SessionActions.logout())//APIUtil.logoutUser());
    // Redirect to login
    window.location.href = "/login";
  }
}


window.store = store;
const App = () => {
  return (
    <div className="App">
        <header>
          <NavBar />
          <Dictaphone />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignupFormContainer}/>
          <Route path="/search" component={SearchContainer}/>
          <Route path="/index" component={SearchIndexContainer}/>
          <Route exact path="/recipes/:recipeId" component={BackupRecipeShowContainer} />
          <Redirect to="/" />
        </Switch>
    </div>);
}

const AppContainer = () => {
  return (<Provider store={store}>
    <HashRouter>
    <App store={store} />
    </HashRouter>
  </Provider>);
}

export default AppContainer;

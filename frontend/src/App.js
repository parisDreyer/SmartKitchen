import React, { Component } from 'react';
import logo from './logo.svg';
import './css/reset.css';
import './css/App.css';
import { Provider} from 'react-redux';
import Dictaphone from './components/dictaphone.jsx';
import NavBar from './components/nav_bar/nav_bar';
import Home from './components/home';
import SearchIndexContainer from './components/recipes/search_results_index_container';
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
import jwt_decode from "jwt-decode";
import * as APIUtil from "./util/session_api_util";
import { AuthRoute, ProtectedRoute } from "./util/route_util";

const store = ConfigureStore();
if (localStorage.jwtToken) {
  // Set auth token header auth
  APIUtil.setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(APIUtil.setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(APIUtil.logoutUser());
    // Redirect to login
    window.location.href = "/login";
  }
}


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
          <Redirect to="/" />
        </Switch>
    </div>);
}

// hi
// <SearchIndexContainer />

const AppContainer = () => {
  return (<Provider store={store}>
    <HashRouter>
    <App store={store} />
    </HashRouter>
  </Provider>);
}

export default AppContainer;

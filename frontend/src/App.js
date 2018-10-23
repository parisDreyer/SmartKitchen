import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Provider} from 'react-redux';
import Dictaphone from './components/dictaphone.jsx';
import SearchIndexContainer from './components/recipes/search_results_index_container';
import ConfigureStore from "./store/store";
const store = ConfigureStore();


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



const App = () => {
  return (<div className="App">
        <header className="App-header">Learn React</header>
        
          hi
          <Dictaphone />
          <SearchIndexContainer />
        
  </div>);
}


const AppContainer = () => {
  return (<Provider store={store}>
    <App store={store} />
  </Provider>);
}

export default AppContainer;

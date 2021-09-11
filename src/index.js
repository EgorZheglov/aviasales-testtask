import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';


const defaultState = {
  isAllStopsChecked:true,
  stopsArray:[]
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case "TOGGLE_STOPS":
      return {...state, isAllStopsChecked: action.payload}
    case "CHANGE_ARRAY":
        return {...state, stopsArray: action.payload}
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


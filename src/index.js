import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider, createStoreHook } from 'react-redux';

const defaultState = {
  cash: 10,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {

    case 'ADD_CASH':
      return {...state, cash: state.cash + action.payload}
    
    case 'GET_CASH':
      return {...state, cash: state.cash - action.payload}
    
    default: 
      return state
  }
}

const store = createStoreHook(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//   </React.StrictMode>
// );



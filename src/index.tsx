import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './Reducers/myStore';

const GlobalStyle = createGlobalStyle`
    body{
        height:100vh;
        background: black;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif, 'SFBigWhiskey';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

ReactDOM.render(
  <Provider store={store}> 
    <GlobalStyle/>
    <App />
  </Provider>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import client from './apollo/index';


const renderApp = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <App />
        </Router>
    </ApolloProvider>,  
   document.getElementById('root')
  );
};

renderApp()

export default client;


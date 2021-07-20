import './App.css';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Users from './pages/Users';
import LoginSignUp from './pages/Login-SignUp';
import NonUsers from './pages/NonUsers';
import SingleDrink from './pages/SingleDrink';
import Header from './components/Header';
import Footer from './components/Footer';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
            <Route exact path="/">
                <Home />
                
              </Route>
            <Redirect to="/" />
            <Route exact path="/">
              <NonUsers />
              
            </Route>
            <Route exact path="/Login-SignUp">
              <LoginSignUp />
            </Route>
            <Route exact path="/Users">
              <Users />
              {/* dashboard fro sign-in-users */}
            </Route>
            <Route exact path="/SingleDrink">
              <SingleDrink />
            </Route>
             {/*<Route exact path="/DrinkList/:Id">
              <DrinkList />
            </Route> */}
          </div>
          <Footer />
          </div>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}



export default App;

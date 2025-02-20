import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Payment from './Payment';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51HPvebIM4tSV6zUO4C5HaoGbNvlJ511RrB2F9qIOnaBIBLcPJVQTLUOZpwYxYd76Mb4a7iicd8mHhRowJaMg3FAm00ILURSKOI"
);

function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    // will run only once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);

      if(authUser) {
        // user just logged in or was logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })

      } else {
        // the user is logged out....
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">    {/* Make sure default route is always at the bottom */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

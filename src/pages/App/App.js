import React,{useEffect} from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import useToken from '../../store/useToken';



const App = () => {

  const { token, setToken } = useToken();  


  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;

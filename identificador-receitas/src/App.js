import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*Paginas*/
import Login from './view/login';
import Registrar from './view/registrar';
import Home from './view/home';

function App() {
  return (
   <Router>
     <Route exact path='/' component={Home}/>
     <Route exact path='/login' component={Login}/>
     <Route exact path= '/registrar' component={Registrar}/>
   </Router>
  );
}

export default App;

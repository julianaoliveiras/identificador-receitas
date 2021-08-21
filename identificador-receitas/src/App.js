import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store';

/*Paginas*/
import Login from './view/login';
import Registrar from './view/registrar';
import Home from './view/home';
import Identificador from './view/identificador';

function App() {
  return (
    <Provider store={store}>
   <Router>
     
     <Route exact path='/' component={Home}/>
     <Route exact path='/login' component={Login}/>
     <Route exact path= '/registrar' component={Registrar}/>
     <Route exact path= '/identificador' component={Identificador}/>
     
   </Router>
   </Provider>
  );
}

export default App;

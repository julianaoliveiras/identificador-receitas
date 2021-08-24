import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor } from '../src/store';

/*Paginas*/
import Login from './view/login';
import Registrar from './view/registrar';
import Home from './view/home';
import Identificador from './view/identificador';
import NewReceitas from './view/newReceitas';
import Receitas from './view/receitas';
import Sobre from './view/sobre';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
   <Router>
     
     <Route exact path='/' component={Home}/>
     <Route exact path= '/sobre' component={Sobre}/>
     <Route exact path='/login' component={Login}/>
     <Route exact path= '/registrar' component={Registrar}/>
     <Route exact path= '/identificador' component={Identificador}/>
     <Route exact path= '/newReceitas' component={NewReceitas}/>
     <Route path= '/post/:parametro' component={Identificador}/>
     <Route path= '/receitas/:idPost' component={Receitas}/>
     <Route path= '/editarPost/:idPost' component={NewReceitas}/>
     
   </Router>
   </PersistGate>
   </Provider>
  );
}

export default App;

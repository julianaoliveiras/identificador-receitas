import React from 'react';
import './bolinhas.css';
import { Link } from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import NewReceitas from '../../view/newReceitas';
import Identificador from '../../view/identificador';

function Bolinhas(){
    return(
        <div className="">
        <div className= "bolinha">
            <Link to="#" className="bolinha ativo"></Link>
            <Link to="#" className="bolinha"></Link>
            <Link to="#" className="bolinha"></Link>
            <div className="limpar"></div>
        </div>
        </div>
        
    )
}
export default Bolinhas;
   
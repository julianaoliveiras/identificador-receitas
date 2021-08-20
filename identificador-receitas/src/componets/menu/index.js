import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

import imgApresentacao from '../../view/img/aps.png'
import imgLogo3 from '../../view/img/logo3.png'
import imgEu from '../../view/img/eu.jpg'

function Menu(){
    return(
        <div className="centro">
                <ul className="menu">
                    <li className="menu-horizontal"><a href="index.html" className="menu__link">Home</a></li>
                    <li className="menu-horizontal"><a href="receitas.html"className="menu__link">Receitas</a></li>
                    <li className="menu-horizontal"><a href="contato.html"className="menu__link">Contato</a></li>
                    <li className="menu-horizontal"><a href="sobre.html"className="menu__link">Sobre</a></li>
                    <li className="menu-horizontal"><Link className="btn-entrar" to='/login'>Entrar</Link></li>
                    <li className="menu-horizontal"><Link className="btn-registrar" to='/registrar'>Registrar</Link></li>
                </ul>
                <div className="limpar"></div>
                 
               
            </div>
    )
}
export default Menu;
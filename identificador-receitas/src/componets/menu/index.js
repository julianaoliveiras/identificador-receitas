import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

import imgApresentacao from '../../view/img/aps.png'
import imgLogo3 from '../../view/img/logo3.png'
import imgEu from '../../view/img/eu.jpg'
import {useDispatch, useSelector} from 'react-redux';

function Menu(){
    const dispatch = useDispatch();
    return(
        <div className="centro">
                <ul className="menu">
                    {
                        useSelector(state => state.usuarioLogado) > 0 ?
                        <>
                        <li className="menu-horizontal"><Link to='/' className="menu__link">Home</Link></li>
                        <li className="menu-horizontal"><Link to="#"className="menu__link">Receitas</Link></li>
                        <li className="menu-horizontal"><Link to="#" className="menu__link">Contato</Link></li>
                        <li className="menu-horizontal"><Link to="#" className="menu__link">Sobre</Link></li>
                        <li className="menu-horizontal"><Link className="btn-entrar" onClick={()=> dispatch({type: 'LOGOUT'})}>Sair</Link></li>
                        </>
                        :
                        <>
                        <li className="menu-horizontal"><Link to="/" className="menu__link">Home</Link></li>
                        <li className="menu-horizontal"><Link to ='#'className="menu__link">Receitas</Link></li>
                        <li className="menu-horizontal"><Link to="#" className="menu__link">Contato</Link></li>
                        <li className="menu-horizontal"><Link to="#" className="menu__link">Sobre</Link></li>
                        <li className="menu-horizontal"><Link className="btn-entrar" to='/login'>Entrar</Link></li>
                        <li className="menu-horizontal"><Link className="btn-registrar" to='/registrar'>Registrar</Link></li>
                        </>
                    }
                    
                </ul>
                <div className="limpar"></div>
                 
               
            </div>
    )
}
export default Menu;
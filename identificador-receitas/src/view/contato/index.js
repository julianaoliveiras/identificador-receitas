import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Menu from '../../componets/menu';
import Rodape from '../../componets/rodape';
import './contato.css';
import contato from '../img/contato.png';
import Caixa from '../../componets/caixa-email';

function Contato(){
    return(
        <>
        
        <div class="fundo7">
            <Menu></Menu>
            <div className="centro">

            
        <div className="apresentacao-box">
                <div className="apresentacao-img">
                    <img src={contato} alt=""/>
                </div>
                <div className="apresentacao-descricao">
                <h2 className="titulo-apresentacao">
                        <strong>Telefones:</strong><br/> (12) 11223-4455
                        <br/> <br/>
                        <strong>E-mail:</strong> <br/>idreceitas@gmail.com 
                        <br/> <br/>
                        <strong>Endereço:</strong><br/> Rua Sol da Meia-Noite, 123, Centro - PR   
                    </h2>
                </div>
            <div className="limpar"></div>
        </div>
        </div>
        <Caixa></Caixa>
        <Rodape></Rodape>
        </div>
        </>   
    )
}
export default Contato;
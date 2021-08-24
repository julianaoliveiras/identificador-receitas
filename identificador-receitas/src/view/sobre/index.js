import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Menu from '../../componets/menu';
import Rodape from '../../componets/rodape';
import './sobre.css';
import sobre from '../img/sobre.png';
import Caixa from '../../componets/caixa-email';

function Sobre(){
    return(
        <>
        
        <div class="fundo7">
            <Menu></Menu>
            <div className="centro">

            
        <div className="apresentacao-box">
                <div className="apresentacao-img">
                    <img src={sobre} alt=""/>
                </div>
                <div className="apresentacao-descricao">
                        <h2 className="titulo-apresentacao">
                            <strong>Sobre:</strong> <br/>
                            <p className="rodape-descricao">
                                A Internet, hoje em dia, é aliada na execução das mais diversas tarefas. Assim sendo, caso queira cozinhar algo com os ingredientes que tem em casa, pode contar com a gente!
                                <br/><br/>
                                De forma simples e intuitiva, terá acesso a milhares de receitas deliciosas que se ajustam conforme os alimentos que tenha na despensa ou frigorífico.
                                <br/><br/>
                                A ideia desse projeto surgiu com o propósito de auxiliar as pessoas na cozinhas com os ingredientes que ela tem em casa.  <br/>
                            </p>
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
export default Sobre;
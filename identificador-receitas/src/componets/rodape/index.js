import React from 'react';
import './rodape.css';
import { Link } from 'react-router-dom';
function Rodape (){
    return(
        <div className="rodape">
                    <div className="centro">
                        <div className="rodape-box">
                            <p className="rodape-descricao">Essa aplicação tem como propósito<br></br>
                                encontrar receitas culinárias <br></br>através dos  
                                ingredientes que o usuário <br></br>possui em casa.
                            </p>
                        </div>
                        <div className="rodape-menu"> 
                            <strong className="rodape-titulo">Termos</strong>
                            <ul>
                                <li className="rodape-menu-item"><a href="#" className="rodape-link">Docs</a></li>
                                <li className="rodape-menu-item"><a href="#" className="rodape-link">Suporte Informações</a></li>
                                <li className="rodape-menu-item"><a href="#" className="rodape-link">Privacidade</a></li>
                                <li className="rodape-menu-item"><a href="#" className="rodape-link">Gerenciar cookies</a></li>
                            </ul>
                        </div>
                        <div className="rodape-menu">
                            <strong className="rodape-titulo">Paginas</strong>
                            <ul>
                                <li className="rodape-menu-item"><a href="#" className="rodape-link">GitHub</a></li>
                                <li className="rodape-menu-item"><a href="#" className="rodape-link">LinkedIn</a></li>
                                <li className="rodape-menu-item"><a href="#" className="rodape-link">Facebook</a></li>
                                <li className="rodape-menu-item"><a href="#" className="rodape-link">Youtube</a></li>
                            </ul>
                        </div>
                        <div className="rodape-menu">
                            <strong className="rodape-titulo">Contato</strong>
                            <ul>
                                <li className="rodape-menu-item"><a href="#" className="rodape-link">Fale Conosco</a></li>
                                <li className="rodape-menu-item"><a href="#" className="rodape-link">Endeços</a></li>
                                <li className="rodape-menu-item"><a href="#" className="rodape-link">SAC</a></li>
                                <li className="rodape-menu-item"><a href="#" className="rodape-link">Dúvidas</a></li>
                            </ul>
                        </div>
                        <div className="limpar"></div>
                        <div className="autor">
                            <p> Por <a className="fim" href="#">Juliana</a></p>
                        </div>
                    </div>
        </div>
    )
}
export default Rodape;
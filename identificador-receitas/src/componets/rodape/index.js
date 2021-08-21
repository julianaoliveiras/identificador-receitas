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
                                <li className="rodape-menu-item"><Link to="#" className="rodape-link">Docs</Link></li>
                                <li className="rodape-menu-item"><Link to="#" className="rodape-link">Suporte Informações</Link></li>
                                <li className="rodape-menu-item"><Link to="#" className="rodape-link">Privacidade</Link></li>
                                <li className="rodape-menu-item"><Link to="#"className="rodape-link">Gerenciar cookies</Link></li>
                            </ul>
                        </div>
                        <div className="rodape-menu">
                            <strong className="rodape-titulo">Paginas</strong>
                            <ul>
                                <li className="rodape-menu-item"><Link to="#" className="rodape-link">GitHub</Link></li>
                                <li className="rodape-menu-item"><Link to="#" className="rodape-link">LinkedIn</Link></li>
                                <li className="rodape-menu-item"><Link to="#" className="rodape-link">Facebook</Link></li>
                                <li className="rodape-menu-item"><Link to="#" className="rodape-link">Youtube</Link></li>
                            </ul>
                        </div>
                        <div className="rodape-menu">
                            <strong className="rodape-titulo">Contato</strong>
                            <ul>
                                <li className="rodape-menu-item"><Link to="#" className="rodape-link">Fale Conosco</Link></li>
                                <li className="rodape-menu-item"><Link to="#" className="rodape-link">Endeços</Link></li>
                                <li className="rodape-menu-item"><Link to="#" className="rodape-link">SAC</Link></li>
                                <li className="rodape-menu-item"><Link to="#" className="rodape-link">Dúvidas</Link></li>
                            </ul>
                        </div>
                        <div className="limpar"></div>
                        <div className="autor">
                            <p> Por <Link to="#" className="fim">Juliana</Link></p>
                        </div>
                    </div>
        </div>
    )
}
export default Rodape;
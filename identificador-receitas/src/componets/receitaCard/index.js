import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './receitaCard.css';
import comida1 from '../../view/img/comida1.jpg';
import comida2 from '../../view/img/comida2.jpg';
import comida3 from '../../view/img/comida3.jpg';

function ReceitaCard(){
    return(
        <div className="posts-receitas">
                <div className="centro">
                    <h2 className="minha-historia">Aqui estão as possíveis receitas</h2>
                    <h5 className="minha-descricao">Legal, né?! 🥰 </h5>
                    <div className="conteiner">
                      
                        <div className="conteiner-box">
                            <div className="post-espaco">
                                <Link to="#" class="post-link">
                                    <div className="post-img">
                                        <img src={comida1} alt=""></img>
                                        <span className="post-titulo"><br></br>Costela assada ao molho madeira</span>
                                        
                                    </div>
                                </Link>    
                            </div>
                        </div>
                        <div className="conteiner-box">
                            <div className="post-espaco">
                                <Link to="#" className="post-link">
                                    <div className="post-img">
                                        <img src={comida2} alt=""></img>
                                        <span className="post-titulo"><br></br>Panqueca americana </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="conteiner-box">
                            <div className="post-espaco" className="post-link">
                                <Link to="#" className="post-link">
                                    <div class="post-img">
                                        <img src={comida3} alt=""></img>
                                        <span class="post-titulo"><br></br>Contra filé na grelha</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bolinhas">
                            <Link to="#" className="bolinha ativo"></Link>
                            <Link to="#" className="bolinha"></Link>
                            <Link to="#" className="bolinha"></Link>
                        </div><div className="limpar"></div>
                    </div>
                </div>
            </div>
    )
}
export default ReceitaCard;
import React, {useState} from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import 'firebase/auth'
import Menu from '../../componets/menu';
import Caixa from '../../componets/caixa-email/';
import Rodape from '../../componets/rodape';
import imgApresentacao from '../../view/img/aps.png'
import imgLogo3 from '../../view/img/logo3.png'
import imgEu from '../../view/img/eu.jpg'
function Home(){
    return(
        <>
        <div className="apresentacao">
            <div className="centro">
            <Menu></Menu>
                <div className="apresentacao-box">
                    <div className="apresentacao-descricao">
                        <h2 className="titulo-apresentacao">
                            A nova forma de cozinhar com os ingredientes que se tem em casa,<br></br>
                            deixe o <strong>identificador de receitas</strong> <br></br> descobrir por você!
                        </h2>
                        <p className="descricao-apresentacao">
                            Um jeito simple e prático de descobrir receitas a partir dos ingredientes que se tem em casa.
                        </p>
                        <Link to='/login' className="btn-comecar">Começar</Link>
                    </div>
                    <div className="apresentacao-img">
                        <img id="image" src={imgApresentacao}/>
                    </div>
                    <div className="limpar"></div>    
                </div>
            </div>
            <div id="sobre">
                    <div className="centro">
                        <div className="ilustracao-img">
                            <img src={imgLogo3} alt=""></img>
                        </div>
                        <div className="sobre-informacao">
                            <h5 className="box-sobre-titulo">Sobre</h5>
                            <h4 className="box-sobre-subtitulo">Identificador de Receitas</h4>
                            <ul>
                                <li className="item-list-sobre">
                                    <i className="checklist"></i>
                                    <span> Indica Receitas</span>
                                    <div className="limpar"></div>
                                </li>
                                <li className="item-list-sobre">
                                    <i className="checklist"></i>
                                    <span> Facilidade no Uso</span>
                                    <div className="limpar"></div>
                                </li>
                                <li className="item-list-sobre">
                                    <i className="checklist"></i>
                                    <span> Qualidade nas Buscas</span>
                                    <div className="limpar"></div>
                                </li>
                                <li className="item-list-sobre">
                                    <i className="checklist"></i>
                                    <span> Prático para o dia a dia</span>
                                    <div className="limpar"></div>
                                </li>
                            </ul>
                        </div>
                        <div className="limpar"></div>
                    </div>
                </div>
                <div className="box-desenvolvedor">
                    <div className="desenvolvedor">
                        <div className="centro">
                            <h2 className="titulo-desenvolvedor">Desenvolvedora</h2>
                            <h5 className="subtitulo-desenvolvedor">Aplicação realizada por</h5>
                            <div className="desenvolvedor-img">
                                <img src={imgEu} alt=""></img>
                            </div>
                            <span className="desenvolvedor-nome">
                                Juliana Oliveira
                            </span>
                            <span className="desenvolvedor-curso">
                                Engenharia de Software - UTFPR <br></br> 6º Período
                            </span>
                            <p className="desenvolvedor-texto">
                                "Essa aplicação é um fruto desenvolvido para o trabalho da disciplina de Programação Web I
                                da Universidade Tecnológica Federal do Paraná - UTFPR."
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box-minha-historia">
                    <div className="centro">
                        <h2 className="minha-historia">Minha história</h2>
                        <h5 className="minha-descricao">um pouco mais ...</h5>
                        <div className="caixa">
                            <div className="minha-historia-box">
                                <div className="wapper">
                                    <h6 className="minha-historia-titulo">Quem eu sou?</h6>
                                    <p className="minha-historia-texto"> 22 anos, amante de <span className="underline">café e dogzinhos </span>
                                    buscando prender cada vez mais sobre Engenharia de Software ❤️
                                    Front-end 🥰🥰 
                                    Back-end 😕😕
                                    </p>
                                </div>
                            </div>
                            <div className="minha-historia-box">
                                <div className="wapper">
                                    <h6 className="minha-historia-titulo">Área de atuação</h6>
                                    <p className="minha-historia-texto"> Graduando na Universidade Tecnológica
                                    Federal do Paraná, com ensino técnico
                                    pelo Instituto Federal de Educação, Ciência
                                    e Tecnologia da Bahia. Experiência na
                                    área de Engenharia de Software, com
                                    ênfase em <strong className="negrito">Gestão do Conhecimento,
                                    Desenvolvimento Web, IoT e Programação</strong> 
                                    </p>
                                </div>
                            </div>
                
                
            </div>
        </div>
    </div>
                
                
</div>
        
        <Caixa></Caixa>
        <Rodape></Rodape>
        
        </>
    )
}
export default Home;
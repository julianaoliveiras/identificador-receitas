import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import './identificador.css';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import 'firebase/auth'
import Menu from '../../componets/menu';
import Rodape from '../../componets/rodape';
import Login from '../login';
import comida3 from '../img/comida3.jpg';
import comida2 from '../img/comida2.jpg';
import comida1 from '../img/comida1.jpg';
import Caixa from '../../componets/caixa-email';
import ReceitaCard from '../../componets/receitaCard';
import Bolinhas from '../../componets/bolinhas';



function Identificador(){
    const [receitas, setReceitas]= useState([]);
    var listaReceitas=[];

    useEffect( ()=>{
        firebase.firestore().collection('receitas').get().then(async (resultado)=>{
            await resultado.docs.forEach(doc=>{
                listaReceitas.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setReceitas(listaReceitas);
        })
    });

    return(
        <>
        
        <div className="fundo">
            <div class="centro">
                <Menu/>
                <div className="ingredientes">
                    <div className="centro">
                        <div className="box-colocar-ingredientes">
                            <div className="caixa-mandar-email">
                                <div className="content-caixa" >
                                    <span className="mandar-email-text">Primeiro me fala quais ingredientes você <br></br>tem em casa 👉</span>
                                    <form className="form">
                                        <div className="mandar-email-input-box">
                                            <div className="mandar-email-icon">
                                                 <input type="text" name="" value="" className="mandar-email-input" placeholder="digite o nome do ingrediente"></input>
                                            </div>
                                        </div>
                                        <div className="mandar-email-submit-box">
                                            <span className="glyphlcon glyphlcon-search">
                                                <input type="submit" name="" value="" className="buscar"></input>
                                            </span>
                                        </div>
                                    </form>
                                    <div className="limpar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="posts-receitas">
                <div className="centro">
                    <h2 className="minha-historia">Aqui estão as possíveis receitas</h2>
                    <h5 className="minha-descricao">Legal, né?! 🥰 </h5>
                </div>
            </div>
            <div className="row">
            {
                receitas.map(item => <ReceitaCard key ={item.id} id={item.id} titulo={item.titulo} descricao={item.descricao} 
                    imagens={item.imagens}/>)
            }
           </div>
            
            
            <Rodape/>

        </div>
        
       </>
    )
}
export default Identificador;
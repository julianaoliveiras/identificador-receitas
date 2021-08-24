import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './receitaCard.css';
import firebase from "../../config/firebase";

function ReceitaCard({id, titulo, descricao, imagens}){
    const [urlImagens, setUrlImagens]= useState();
    useEffect( ()=>{
        firebase.storage().ref(`Imagens/${imagens}`).getDownloadURL().then( url=>{
            setUrlImagens(url);
        })
    }, [urlImagens]);
    return(
        
                <div className="col-md-3 col-sm-12">
                    <div className="">
                    <br/><br/><br/>
                        <div className="">
                            <div className="post-espaco">
                                <Link to={`/receitas/${id}`} class="post-link">
                                    <div className="post-img">
                                        <img src={urlImagens} className="card-img-top img-cartao" />
                                        <span className="post-titulo">{titulo}</span>   
                                    </div>
                                </Link>    
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            

    )
}
export default ReceitaCard;
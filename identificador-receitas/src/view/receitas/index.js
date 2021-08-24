import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Menu from '../../componets/menu';
import Rodape from '../../componets/rodape';
import './receitas.css';
import firebase from '../../config/firebase';
import Fundo from '../../componets/fundo';
import icon from '../img/calendar.png';
import editar from '../img/editar-arquivo.png';
import titulo from '../img/titulo.png';
import lista from '../img/lista.png';
import livroReceitas from '../img/livro-de-receitas.png'

function Receitas({match}){
    const [post, setPost] = useState({});
    const [urlImg, setUrlImg] = useState({});
    const usuarioLogado = useSelector(state => state.usuarioEmail);
    const [carregando, setCarregando] = useState(1);

   

    useEffect( () => {
        firebase.firestore().collection('receitas').doc(match.params.idPost).get().then( resultado => {
            setPost(resultado.data());
            firebase.storage().ref(`Imagens/${post.imagens}`).getDownloadURL().then( url => {
                setUrlImg(url)
                setCarregando(0);
            });
        })
    }, []);

    return(
        <>
        <div className="fundo6">
        <Menu></Menu>
        <div className="container">
            
       
           
            <div className="row">
            <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
                <img src={urlImg} className="img-banner" alt=""></img>
            </div>
            <div className="row mt-5 d-flex justify-content-around">

                <div className= "col-md-2 col-sm-12 p-3 box-info my-2">
                    <img src={titulo}></img><br/>
                    <h1><strong>Título</strong></h1>
                    <span className="mt-3">{post.titulo}</span>

                </div>
                <div className= "col-md-2 col-sm-12 p-3 box-info my-2">
                 <img src={lista}></img><br/>
                    <h5><strong>Categoria</strong></h5>
                    <span className="mt-3">{post.categoria}</span>
                </div>
                <div className= "col-md-2 col-sm-12 p-3 box-info  my-2">
                <img src={icon}></img><br/>
                    <h5><strong>Data</strong></h5>

                    <span className="mt-3">{post.data}</span>

                </div>
            </div>
            <div className="box-editar mt-5">
            <br/>
            <img src={livroReceitas}></img>
            </div>
                <div className="">
                <p className="text-center p-5">
                    {post.descricao}
                    <br/><br/><br/><br/><br/>
                </p>
                </div>
               
           
            <div className="box-editar">
                {
                    usuarioLogado == post.usuario?
                    <Link to={`/editarPost/${match.params.idPost}`} className="btn-editar">
                <br/>
                <img src={editar}></img>
                </Link>
                :
                null
                }
            
            </div>
         

        </div>
        </div>
       
        
        <Rodape></Rodape>
        </>
    )
}
export default Receitas;

import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Menu from '../../componets/menu';
import Rodape from '../../componets/rodape';

import firebase from '../../config/firebase';

function NewReceitas({match}){

    const [titulo, setTitulo]= useState();
    const [descricao, setDescricao]= useState();
    const [categoria, setCategoria]= useState();
    const [data, setData]= useState();
    const [hora, setHora]= useState();
    const [imagens, setImagens]= useState();
    //const [usuarioEmail, setUsuarioEmail]= useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();
    const [imgAtual, setImgAtual] = useState();
    const [imgNova, setImgNova] = useState();
    const [carregando, setCarregando]= useState(0);
    useEffect( ()=> {
        if(match.params.idPost){
        firebase.firestore().collection('receitas').doc(match.params.idPost).get().then( resultado =>{
            setTitulo(resultado.data().titulo);
            setDescricao(resultado.data().descricao);
            setCategoria(resultado.data().data);
            setData(resultado.data().data);
            setHora(resultado.data().hora);
            setImgAtual(resultado.data().imagens);
        })
    }
    }, [carregando])
    
    function atualizar(){
        setCarregando(1)

        if(imgNova)
        storage.ref(`Imagens/${imgNova.name}`).put(imgNova);
        db.collection('receitas').doc(match.params.idPost).update({
           titulo: titulo,
           descricao: descricao,
            data: data,
            categoria: categoria,
            hora: hora,
            imagens: imgNova ? imgNova.name : imgAtual
        }).then( () => {
           alert('Receita atualizada!')
            setCarregando(0);
        }).catch(erro => {
            alert(erro);
            setCarregando(0);
        })
    }

    function cadastrarReceitas(){
        setCarregando(1);
        storage.ref(`Imagens/${imgNova.name}`).put(imgNova).then(()=>{
            db.collection('receitas').add({
                titulo: titulo,
                descricao: descricao,
                categoria: categoria,
                data: data,
                hora: hora,
                imagens: imgNova.name,
                publico: 1,
                criacao: new Date(),
                usuario: usuarioEmail,
                visualizacoes: 0

            }).then(() => {
                alert('Receita cadastrada com sucesso!');
                setCarregando(0);
            }).catch(()=>{
                alert('Falha em cadastrar receitas!');
                setCarregando(0);
            })
        });
    }
    return(
        <>
        <div className="fundo6">
            <div className="centro">
            <Menu/>
             <div className="posts-receitas">
                <div className="centro">
                    <h2 className="receitas-titulo">{match.params.idPost ? 'Editar Receita':'Novas receitas'} </h2>
                    <h5 className="receitas-subtitulo">Estamos prontos para <strong class="negrito">apreciar</strong> sua receita  😍 😍</h5>
                    <br/> 
                </div>
                    <div className="">
                <div className="col-12">
                <div className="centro-login">
                    <div  className="espaco-login">
                        <form  className="login-form" >
                            <div className="input" >
                                <span  className="label-input" >Título</span>
                                <input onChange={(e) => setTitulo(e.target.value)} className="form-input" type="text" name="username" value={titulo}></input>
                                <span  className="focus"></span>
                            </div>
                           
                            <div className="form-group my-2">
                            <br/><br/>
                                <span  className="label-input">Descrição da Receitas</span><br/>
                                <textarea onChange={(e) => setDescricao(e.target.value)} className="form-control mh-100 p-3" rows="3" value={descricao}></textarea>
                                <span  className="focus"></span>
                            </div>
                            <div  className="input" >
                            <br/> <br/>  
                                <span  className="label-input">Selecione uma categoria para sua receita 👇<br/></span>
                                <br/>
                                <select onChange={(e) => setCategoria(e.target.value)} className="" value={categoria} >
                                    <option disabled selected value>-</option><br/> <br/>
                                    <option>BOLOS E TORTAS DOCES</option>
                                    <option>CARNES</option>
                                    <option>AVES</option>
                                    <option>PEIXES E FRUTOS DO MAR</option>
                                    <option>SALADAS, MOLHOS E ACOMPANHAMENTOS</option>
                                    <option>SOPAS</option>
                                    <option>MASSAS</option>
                                    <option>BEBIDAS</option>
                                    <option>DOCES E SOBREMESAS</option>
                                    <option>LANCHES</option>
                                    <option>LIGHT</option>
                                    <option>ALIMENTAÇÃO SAUDÁVEL</option>
                                </select>
                                <br/><br/><br/> <br/>  
                            </div>
                            <div className="input" >
                            <br/>
                                <span  className="label-input">Data:</span><br/> <br/> 
                                <input onChange={(e) => setData(e.target.value)} className="data" type="date" value={data}></input>
                                <span  className="focus"></span>
                                <br/><br/>  
                            </div>
                            <div className="input" >
                            <br/>
                                <span  className="label-input">Horário</span><br/> <br/> 
                                <input onChange={(e) => setHora(e.target.value)} className="" type="time" value={hora}></input>
                                <span  className="focus"></span>
                                <br/><br/>
                            </div>
                            <div className="" >
                                <br/>
                                <span  className="label-input">Upload de Imagens 👇<br/></span>
                                <br/><br/>
                                <input onChange={(e) => setImgNova(e.target.files[0])} className="" type="file"></input>
                                <br/><br/> 
                            </div>
                            <div className="">
                            {
                                carregando ? <div class="spinner-border text-secondary" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div>
                                : <div  className="btn-logar-box">
                                <button className="btn btn-default btn-lg btn-logar" type="button" onClick={match.params.idPost ? atualizar: cadastrarReceitas}> {match.params.idPost ? 'Atualizar Receita':'Cadastrar Receita'}</button>
                            </div>
                            }

                            </div>
                           
                            
                        </form>
                    </div>
                </div>
            </div>
            </div>  
            </div>
            <br/> <br/> <br/> <br/><br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/> <br/> <br/><br/> <br/><br/> <br/> 
            <Rodape/>
            </div>
        </div>
        
        </>
    )
}
export default NewReceitas;
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
                    
                
                <div className='cadastrar col-11'>
            <form>
                <div className="form-group my-3 ">
                    <label>Titulo da Receita: </label>
                    <input onChange={(e) => setTitulo(e.target.value)} className="form-control mt-2" type="text" value={titulo}></input>
                </div>
                
                <div className="form-group row my-4">
                    <div className="col-12">
                        <label> Categoria da Receita:</label>
                        <select onChange={(e) => setCategoria(e.target.value)} className="form-control mt-2" value={categoria} >
                                    <option disabled selected value>Selecione uma opção</option><br/> <br/>
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
                    </div>
                    
                </div>

                <div className="form-group row my-4">
                    <div className="col-6">
                        <label>Data:</label>
                        <input onChange={(e) => setData(e.target.value)} className="form-control mt-2" type="date" value={data}></input>
                    </div>
                    <div className="col-6">
                        <label>Horário:</label>
                        <input onChange={(e) => setHora(e.target.value)} className="form-control mt-2" type="time" value={hora}></input>
                    </div>
                </div>

                <div className="form-group my-4">
                    <label>Upload de Imagem:</label>
                    <input onChange={(e) => setImgNova(e.target.files[0])} className="form-control mt-2" type="file"></input>
                </div>

                <div className="form-group my-4">
                    <label>Passo a Passo da Receita:</label>
                    <textarea onChange={(e) => setDescricao(e.target.value)} className="form-control mt-2" rows="5" value={descricao}></textarea>
                </div>
                
                            {
                                carregando ?  <div class="spinner-border text-secondary" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div>
                                : <div  className="btn-logar-box">
                                <button className="btn btn-default btn-lg btn-logar w-100" type="button" onClick={match.params.idPost ? atualizar: cadastrarReceitas}> {match.params.idPost ? 'Atualizar Receita':'Cadastrar Receita'}</button>
                            </div>
                            }

                            
                

            </form>

        </div>
            </div>
            </div>  
            </div>
            <br/> <br/> <br/> <br/><br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/> <br/> <br/><br/> <br/><br/> <br/> 
            <Rodape/>
           
       
        
        </>
    )
}
export default NewReceitas;
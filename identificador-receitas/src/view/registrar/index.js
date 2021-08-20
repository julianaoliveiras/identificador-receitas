import React, {useState} from 'react';
import './registrar.css'
import firebase from '../../config/firebase';
import 'firebase/auth'


function Registrar(){
    const [email, setEmail]= useState();
    const [senha, setSenha]= useState();

  

    function validar(){
       
        if(!email || !senha ){
            alert('Você precisa preencher todos os campos! 😒');
        }
        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado=>{
            alert('Cadastrado com sucesso');
        }).catch(erro=>{
            switch(erro.message){
                case 'Password should be at least 6 characters':
                    alert('A senha deve ter pelo menos 6 caracteres');
                    break;
                case 'The email address is already in use by another account.':
                    alert('Este email já está sendo usado por outra conta.')
                    break;
                case 'The email addres is badly formatted.':
                    alert('O formato do email é inválido');
                    break;
                default:
                    alert('Não foi possível cadastrar. Por favor tente mais tarde!');
                    break;
            }

        })
    }
    return(
        <div className="login">
                <div className="centro-login">
                    <div  className="espaco-login">
                        <div  className="login-titulo">
                            <span  className="login-titulo-1">Registro de Usuário</span>
                        </div>
                        <form  className="login-form" action="login.html">
                            <div className="input" >
                                <span  className="label-input">E-mail</span>
                                <input  onChange={(e) => setEmail(e.target.value)}  className="form-input" type="text" name="username" placeholder="Entrar com o e-mail"></input>
                                <span  className="focus"></span>
                            </div>
                            <div  className="input" >
                                <span  className="label-input">Senha</span>
                                <input  onChange={(e) => setSenha(e.target.value)} className="form-input" type="password" name="pass" placeholder="Entrar com a senha"></input>
                                <span  className="focus"></span>
                            </div>
                            <div  className="btn-logar-box">
                                <button onClick={validar} className="btn btn-default btn-lg btn-logar" type="button"> Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}
export default Registrar;
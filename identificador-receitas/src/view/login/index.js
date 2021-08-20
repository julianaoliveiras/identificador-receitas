import React, {useState} from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import 'firebase/auth'

function Login(){
  const [email, setEmail]= useState();
  const [senha, setSenha]= useState();

    function autenticar(){
        if(!email || !senha ){
            alert('Você precisa preencher todos os campos! 😒');
        }
       firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado=>{
           alert('Login efetuado com sucesso!');
       }).catch(erro=>{
           //alert(erro);
           switch(erro.message){
            case 'The password is invalid or the user does not have a password.':
                alert('A senha é inválida');
                break;
            case 'There is no user record corresponding to this identifier. The user may have been deleted.':
                alert('Email inválido!')
                break;
            case 'The email address is badly formatted.':
                alert('O formato do email é inválido!');
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
                <div className="espaco-login">
                    <div className="login-titulo">
                         <span className="login-titulo-1">Login de Usuário</span>
                    </div>
                    <div className="form-group form-group-lg">
                        <form className="login-form">
                        <div class="input">  
                                <label for="inputdefault"><span class="label-input">E-mail</span></label>
                                <input onChange={(e) => setEmail(e.target.value)} class="form-input " type="text" name="username" placeholder="Entrar com o e-mail">
                                </input>       
                            </div>
                            <div class="input" >
                                <label for="inputdefault"><span class="label-input">Senha</span></label>
                                <input onChange={(e) => setSenha(e.target.value)} class="form-input" type="password" name="pass" placeholder="Entrar com a senha">
                                </input>   
                                <span class="focus"></span>
                            </div>
                            <div class="btn-logar-box">
                                <button class="btn btn-default btn-lg btn-logar" onClick={autenticar} type= "button">Login</button>
                            </div> 
                        </form>
                    </div> 
                </div>
            </div>
        </div>  
    );
}
export default Login;
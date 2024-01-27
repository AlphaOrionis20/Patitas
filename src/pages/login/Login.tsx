import "./style.css";
import { Input } from "../../components/Input/Input";
import lock from "../../assets/logos/lock.png";
import cat from "../../assets/logos/cat.png";
import Botao from "../../components/Botao/Botao";
import LogoPatitas from "../../components/LogoPatitas/LogoPatitas";
import fotoInicio from "../../assets/imagens/inicio.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cadastrar from "../Cadastrar/Cadastrar";

export default function Login() {
  const [login,setLogin] = useState("")
  const [senha,setSenha] = useState("")
  return (
    <div className="loginDiv">
      <div className="imagemConteiner">
        <LogoPatitas></LogoPatitas>
      </div>
      <div className="imagemConteiner">
        <img src={fotoInicio} />
      </div>
      <div className="formulario">
        <Input value={login} setValue={setLogin} label="Login" placeholder="Digite um" id="nome" img={cat} type='email' />
        <Input value={senha} setValue={setSenha} label="Senha" placeholder="Digite um" id="nome" img={lock} type='password' /> 
        <p className="esqueciSenha">Esqueceu sua senha?</p>
      </div>
      <div className="botaoConteiner">
      <NavLink to={"/Upload"}>
      <Botao texto="Entrar" onClick={() => {}} />
      </NavLink>
      <NavLink to={"/Cadastrar"}>
      <Botao texto="Cadastrar" onClick={() => {}} />
      </NavLink>
      </div>
    </div>
  );
}

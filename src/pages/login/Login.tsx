import "./style";
import { Input } from "../../components/Input/Input";
import lock from "../../assets/logos/lock.png";
import cat from "../../assets/logos/cat.png";
import Botao from "../../components/Botao/Botao";
import LogoPatitas from "../../components/LogoPatitas/LogoPatitas";
import fotoInicio from "../../assets/imagens/inicio.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cadastrar from "../Cadastrar/Cadastrar";
import { BotaoConteiner_, EsqueciSenha_, Formulario_, ImagemConteiner_ } from "./style";

export default function Login() {
  const [login,setLogin] = useState("")
  const [senha,setSenha] = useState("")
  return (
    <div className="loginDiv">
      <ImagemConteiner_>
        <LogoPatitas></LogoPatitas>
      </ImagemConteiner_>
      <ImagemConteiner_>
        <img src={fotoInicio} />
      </ImagemConteiner_>
      <Formulario_>
        <Input value={login} setValue={setLogin} label="Login" placeholder="Digite um" id="nome" img={cat} type='email' />
        <Input value={senha} setValue={setSenha} label="Senha" placeholder="Digite um" id="nome" img={lock} type='password' /> 
        <EsqueciSenha_ >Esqueceu sua senha?</EsqueciSenha_>
      </Formulario_>
      <BotaoConteiner_>
      <NavLink to={"/Upload"}>
      <Botao texto="Entrar" onClick={() => {}} />
      </NavLink>
      <NavLink to={"/Cadastrar"}>
      <Botao texto="Cadastrar" onClick={() => {}} />
      </NavLink>
      </BotaoConteiner_>
    </div>
  );
}

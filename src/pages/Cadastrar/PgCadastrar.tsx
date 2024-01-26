import Botao from "../../components/Botao/Botao";
import LogoPatitas from "../../components/LogoPatitas/LogoPatitas";
import fotoInicio from "../../assets/imagens/inicio.png";
import { useState } from "react";
import { Input } from "../../components/Input/Input";
import lock from "../../assets/logos/lock.png";
import perfil from "../../assets/logos/u_home-alt (2).png";
import cpfLogo from "../../assets/logos/u_home-alt (3).png";
import emailLogo from "../../assets/logos/u_home-alt (4).png";



export default function Cadastrar(){
    const[nome,setNome] = useState("")
    const[cpf,setCpf] = useState("")
    const[email,setEmail] = useState("")
    const[senha,setSenha] = useState("")
    const[confirmaSenha,setConfirmaSenha] = useState("")


    return(
        <div className="cadastrarDiv">
            <div className="imagemConteiner">
                <LogoPatitas></LogoPatitas>
            </div>
            <div className="formulario">
                <Input value={nome} setValue={setNome} label="" placeholder="Nome..." id="nome" img={perfil} />
                <Input value={cpf} setValue={setCpf} label="" placeholder="CPF..." id="cpf" img={cpfLogo} />
                <Input value={email} setValue={setEmail} label="" placeholder="Email..." id="email" img={emailLogo} />
                <Input value={senha} setValue={setSenha} label="" placeholder="Senha..." id="nome" img={lock} /> 
                <Input value={confirmaSenha} setValue={setConfirmaSenha} label="" placeholder="Confirmar senha..." id="confirmar" img={lock} /> 
            </div>
            <div></div>
        </div>
    )
}
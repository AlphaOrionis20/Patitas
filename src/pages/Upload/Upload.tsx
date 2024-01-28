import seta from "../../assets/logos/seta.png";
import upload from "../../assets/imagens/et_upload.png";
import "./style";
import Botao from "../../components/Botao/Botao";
import NavBar from "../../components/NavBar/NavBar";
import { NavLink } from "react-router-dom";
import { Alterar_, BotaoConteiner_, Foto_, TopoVoltar_, Upload_ } from "./style";

export default function Upload() {
  return (
    <>
      <Upload_>
        <TopoVoltar_>
          <img src={seta} />
          <p className="voltar">Voltar</p>
        </TopoVoltar_>
        <Alterar_ >Alterar foto de perfil</Alterar_>
        <Foto_>
          <img src={upload} />
        </Foto_>
        <BotaoConteiner_>
          <NavLink to={"/"}>
          <Botao texto="Baixar Foto" onClick={() => {}} />
          </NavLink>
        </BotaoConteiner_>
      </Upload_>
      <NavBar/>
    </>
  );
}

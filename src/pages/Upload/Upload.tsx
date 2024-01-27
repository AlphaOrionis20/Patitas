import seta from "../../assets/logos/seta.png";
import upload from "../../assets/imagens/et_upload.png";
import "./style.css";
import Botao from "../../components/Botao/Botao";
import NavBar from "../../components/NavBar/NavBar";
import { NavLink } from "react-router-dom";

export default function Upload() {
  return (
    <>
      <div className="uploadDiv">
        <div className="topoVoltar">
          <img src={seta} />
          <p className="voltar">Voltar</p>
        </div>
        <p className="alterar">Alterar foto de perfil</p>
        <div className="uploadFoto">
          <img src={upload} />
        </div>
        <div className="botaoConteiner">
          <NavLink to={"/"}>
          <Botao texto="Baixar Foto" onClick={() => {}} />
          </NavLink>
        </div>
      </div>
      <NavBar/>
    </>
  );
}

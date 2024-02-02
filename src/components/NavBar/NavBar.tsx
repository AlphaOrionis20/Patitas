import React, { useState } from 'react';
import "./styles"
import home from "../../assets/logos/home.png";
import compras from "../../assets/logos/compras.png";
import perfil2 from "../../assets/logos/perfil2.png";
import procurar from "../../assets/logos/procurar.png";
import { CaixaItens_, FecharMenu_, Header_, Imagem_, NavDiv_ } from "./styles";
import MenuPerfil from "../MenuPerfil/MenuPerfil";

const NavBar = () => {
  const [abrirMenu,setAbrirMenu] = useState(false);
  const botaoMenu = ()=>{setAbrirMenu(!abrirMenu)};
  return (
    <Header_>
        {abrirMenu ? (
          
          <MenuPerfil/>
          ) : ("")}
        {abrirMenu ? (
          
          <FecharMenu_ onClick={botaoMenu}/>
          ) : ("")}      
      <NavDiv_>
        <CaixaItens_ >
            <li><Imagem_ src={home}/></li>
            <li><Imagem_ src={procurar}/></li>
            <li><Imagem_ src={compras}/></li>
            <li onClick={botaoMenu}><Imagem_ src={perfil2}/></li>
        </CaixaItens_>
      </NavDiv_>
    </Header_>
  )
}
export default NavBar
import React from "react";
import LogoPatitas from "../../components/LogoPatitas/LogoPatitas";
import "./style"
import { useNavigate, useNavigation } from "react-router-dom";
import { ImagemConteiner_, Inicio_ } from "./style";


export default function Inicio() {
  const navegator = useNavigate()
  React.useEffect(()=>{setTimeout(()=>{navegator("Login")},2000)},[])
  return (
    <Inicio_>
        <ImagemConteiner_>
            <LogoPatitas></LogoPatitas>
        </ImagemConteiner_>
    </Inicio_>
  );
}
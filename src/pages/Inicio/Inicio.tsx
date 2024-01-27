import React from "react";
import LogoPatitas from "../../components/LogoPatitas/LogoPatitas";
import "./style.css"
import { useNavigate, useNavigation } from "react-router-dom";


export default function Inicio() {
  const navegator = useNavigate()
  React.useEffect(()=>{setTimeout(()=>{navegator("Login")},2000)},[])
  return (
    <div className="inicioDiv">
        <div className="imagemConteiner">
            <LogoPatitas></LogoPatitas>
        </div>
    </div>
  );
}
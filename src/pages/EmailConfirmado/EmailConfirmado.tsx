import LogoPatitas from "../../components/LogoPatitas/LogoPatitas";
import dogPaw from "../../assets/imagens/dogPaw.png";
import BotaoConfirmar from "../../components/BotaoConfirmar/BotaoConfirmar";
import "./style.css"
import { NavLink } from "react-router-dom";

export default function EmailConfirmado() {
  return (
    <div className="emailDiv">
        <div className="imagemConteiner">
            <LogoPatitas></LogoPatitas>
        </div>
        <div className="imagemConteiner">
            <img src={dogPaw} />
        </div>
        <div className="botaoConteiner">
            <NavLink to={"/Login"}>
            <BotaoConfirmar texto="E-mail confirmado" onClick={() => {}}/>
            </NavLink>
        </div>
    </div>
  );
}

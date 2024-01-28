import LogoPatitas from "../../components/LogoPatitas/LogoPatitas";
import dogPaw from "../../assets/imagens/dogPaw.png";
import BotaoConfirmar from "../../components/BotaoConfirmar/BotaoConfirmar";
import "./style"
import { NavLink } from "react-router-dom";
import { BotaoConteiner_, Email_, ImagemConteiner_ } from "./style";

export default function EmailConfirmado() {
  return (
    <Email_>
        <ImagemConteiner_>
            <LogoPatitas></LogoPatitas>
        </ImagemConteiner_>
        <ImagemConteiner_>
            <img src={dogPaw} />
        </ImagemConteiner_>
        <BotaoConteiner_ >
            <NavLink to={"/Login"}>
            <BotaoConfirmar texto="E-mail confirmado" onClick={() => {}}/>
            </NavLink>
        </BotaoConteiner_>
    </Email_>
  );
}

import LogoPatitas from "../../components/LogoPatitas/LogoPatitas";
import catAstronaut from "../../assets/imagens/catAstronaut.png";
import BotaoConfirmar from "../../components/BotaoConfirmar/BotaoConfirmar";
import "./style"
import { NavLink } from "react-router-dom";
import { BotaoConteiner_, Confirmar_, ImagemConteiner_ } from "./style";

export default function ConfirmarEmail() {
  return (
    <Confirmar_>
        <ImagemConteiner_ >
            <LogoPatitas></LogoPatitas>
        </ImagemConteiner_>
        <ImagemConteiner_>
            <img src={catAstronaut} />
        </ImagemConteiner_>
        <BotaoConteiner_>
            <NavLink to={"/EmailConfirmado"}>
            <BotaoConfirmar texto="Confirme seu E-mail" onClick={() => {}}/>
            </NavLink>
        </BotaoConteiner_>
    </Confirmar_>
  );
}

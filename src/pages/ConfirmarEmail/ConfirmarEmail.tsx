import LogoPatitas from "../../components/LogoPatitas/LogoPatitas";
import catAstronaut from "../../assets/imagens/catAstronaut.png";
import BotaoConfirmar from "../../components/BotaoConfirmar/BotaoConfirmar";
import "./style.css"

export default function ConfirmarEmail() {
  return (
    <div className="confirmarDiv">
        <div className="imagemConteiner">
            <LogoPatitas></LogoPatitas>
        </div>
        <div className="imagemConteiner">
            <img src={catAstronaut} />
        </div>
        <div className="botaoConteiner">
            <BotaoConfirmar texto="Confirme seu E-mail" onClick={() => {}}/>
        </div>
    </div>
  );
}

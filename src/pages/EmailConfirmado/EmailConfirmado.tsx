import LogoPatitas from "../../components/LogoPatitas/LogoPatitas";
import dogPaw from "../../assets/imagens/dogPaw.png";
import BotaoConfirmar from "../../components/BotaoConfirmar/BotaoConfirmar";
import "./style.css"

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
            <BotaoConfirmar texto="E-mail confirmado" onClick={() => {}}/>
        </div>
    </div>
  );
}

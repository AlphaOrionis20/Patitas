import "./style";
import departamentos from "../../assets/logos/departamentos.png";
import favoritos from "../../assets/logos/favoritos.png";
import pedidos from "../../assets/logos/pedidos.png";
import lista from "../../assets/logos/lista.png";
import mensagem from "../../assets/logos/mensagem.png";
import gatoMenu from "../../assets/imagens/gatoMenu.png";
import {
  Configuracao_,
  Divisor_,
  Espacar_,
  FotoDiv_,
  GatoMenu_,
  Itens_,
  Logo_,
  Menu_,
  ParteInferior_,
  ParteSuperior_,
  Sair_,
  Texto_,
  TituloSair_,
  Titulo_,
} from "./style";
import raissa from "../../assets/imagens/raissa.png";
import configuracao from "../../assets/logos/configuracao.png";
import { NavLink } from "react-router-dom";

const MenuPerfil = () => {
  return (
    <Menu_>
      <GatoMenu_>
        <img src={gatoMenu} />
      </GatoMenu_>
      <ParteSuperior_>
        <Configuracao_>
          <img src={configuracao} />
        </Configuracao_>
        <FotoDiv_>
          <img src={raissa} />
        </FotoDiv_>
        <TituloSair_>
          <Titulo_>Olá, Rayssa!</Titulo_>
          <NavLink to={"/Login"}>
          <Sair_ onClick={() => {}}>Sair da conta</Sair_>
          </NavLink>
        </TituloSair_>
        <Itens_>
          <Logo_ src={departamentos} />
          <Texto_>Departamentos</Texto_>
        </Itens_>
        <Itens_>
          <Logo_ src={favoritos} />
          <Texto_>Favoritos</Texto_>
        </Itens_>
        <Itens_>
          <Logo_ src={pedidos} />
          <Texto_>Meus pedidos</Texto_>
        </Itens_>
        <Itens_>
          <Logo_ src={lista} />
          <Texto_>Lista de compras</Texto_>
        </Itens_>
        <Itens_>
          <Logo_ src={mensagem} />
          <Texto_>Mensagens</Texto_>
        </Itens_>
        <Itens_>
          <Logo_ src="" />
          <Texto_>Suas avaliações</Texto_>
        </Itens_>
      </ParteSuperior_>
      <Divisor_></Divisor_>
      <ParteInferior_>
        <Espacar_>
          <Texto_>Fale conosco</Texto_>
        </Espacar_>
        <Espacar_>
          <Texto_>Seja um vendedor</Texto_>
        </Espacar_>
        <Espacar_>
          <Texto_>Regras da fidelidade</Texto_>
        </Espacar_>
        <Espacar_>
          <Texto_>Termos de uso</Texto_>
        </Espacar_>
        <Espacar_>
          <Texto_>Políticas de privacidade</Texto_>
        </Espacar_>
      </ParteInferior_>
    </Menu_>
  );
};

export default MenuPerfil;

import "./style"
import departamentos from "../../assets/logos/departamentos.png";
import favoritos from "../../assets/logos/favoritos.png";
import pedidos from "../../assets/logos/pedidos.png";
import lista from "../../assets/logos/lista.png";
import mensagem from "../../assets/logos/mensagem.png";
import gatoMenu from "../../assets/imagens/gatoMenu.png";
import { Divisor_, FotoDiv_, Itens_, Logo_, Menu_, ParteInferior_, ParteSuperior_, Sair_, Texto_, TituloSair_, Titulo_ } from "./style";
import raissa from "../../assets/imagens/raissa.png";


const MenuPerfil = () => {
  return (
    <Menu_>
        <ParteSuperior_>
            <FotoDiv_>
                <img src={raissa}/>
            </FotoDiv_>
            <TituloSair_>
                <Titulo_>Olá, Rayssa!</Titulo_>
                <Sair_>Sair da conta</Sair_>
            </TituloSair_>
            <Itens_>
                <Logo_ src={departamentos}/>
                <Texto_>Departamentos</Texto_>
                <Logo_ src={favoritos}/>
                <Texto_>Favoritos</Texto_>
                <Logo_ src={pedidos}/>
                <Texto_>Meus pedidos</Texto_>
                <Logo_ src={lista}/>
                <Texto_>Lista de compras</Texto_>
                <Logo_ src={mensagem}/>
                <Texto_>Mensagens</Texto_>
                <Texto_>Suas avaliações</Texto_>
            </Itens_>
        </ParteSuperior_>
        <Divisor_></Divisor_>
        <ParteInferior_>
            <Texto_>Fale conosco</Texto_>
            <Texto_>Seja um vendedor</Texto_>
            <Texto_>Regras da fidelidade</Texto_>
            <Texto_>Termos de uso</Texto_>
            <Texto_>Políticas de privacidade</Texto_>
        </ParteInferior_>
    </Menu_>
  )
}

export default MenuPerfil

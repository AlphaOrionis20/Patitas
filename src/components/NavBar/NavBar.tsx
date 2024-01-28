import "./styles"
import home from "../../assets/logos/home.png";
import compras from "../../assets/logos/compras.png";
import perfil2 from "../../assets/logos/perfil2.png";
import procurar from "../../assets/logos/procurar.png";
import { CaixaItens_, Header_, Imagem_, NavDiv_ } from "./styles";

const NavBar = () => {
  return (
    <Header_ >
      <NavDiv_>
        <CaixaItens_ >
            <li><Imagem_ src={home}/></li>
            <li><Imagem_ src={procurar}/></li>
            <li><Imagem_ src={compras}/></li>
            <li><Imagem_ src={perfil2}/></li>
        </CaixaItens_>
      </NavDiv_>
    </Header_>
  )
}
export default NavBar
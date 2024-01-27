import "./styles.css"
import home from "../../assets/logos/home.png";
import compras from "../../assets/logos/compras.png";
import perfil2 from "../../assets/logos/perfil2.png";
import procurar from "../../assets/logos/procurar.png";

const NavBar = () => {
  return (
    <div className="header">
      <nav className="navDiv">
        <ul className="caixaItens">
            <li><img src={home}/></li>
            <li><img src={procurar}/></li>
            <li><img src={compras}/></li>
            <li><img src={perfil2}/></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar

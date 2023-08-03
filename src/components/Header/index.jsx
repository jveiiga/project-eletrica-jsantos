import { useState } from "react"
import logo from "../../images/svg/logo.svg"
import imgHeader from "../../images/svg/img-header.svg"
import { Link } from "react-router-dom";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div >
                <img className="imgHeader-container" src={imgHeader} />
            </div>

            <div className="logo-container">
                <img src={logo} />
            </div>

            <div className="menu-container">
                <button className={`menu-hamburguer ${isOpen ? "open" : ""}`} onClick={handleMenuClick}>
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                </button>
            </div>

            <div className={`menu-mobile ${isOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/categorias">Categorias</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="localizacao">Localização</Link>
                    </li>
                    <li>
                        <button>Contato</button>
                    </li>
                </ul>
            </div>

            <div className="menu-desktop">
            <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/categorias">Categorias</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="localizacao">Localização</Link>
                    </li>
                    <li>
                        <button>Contato</button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header
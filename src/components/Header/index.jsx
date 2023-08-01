import { useState } from "react"
import logo from "../../images/svg/logo.svg"
import imgHeader from "../../images/svg/img-header.svg"

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
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Categorias</a>
                    </li>
                    <li>
                        <a>Sobre</a>
                    </li>
                    <li>
                        <a>Localização</a>
                    </li>
                    <li>
                        <button>Contato</button>
                    </li>
                </ul>
            </div>

            <div className="menu-desktop">
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Categorias</a>
                    </li>
                    <li>
                        <a>Sobre</a>
                    </li>
                    <li>
                        <a>Localização</a>
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
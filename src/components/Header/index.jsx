const Header = () => {
    return (
        <header className="header">
             {/* Conteúdo do header mobile */}
            <div className="mobile_menu">
                {/* Conteúdo específico do menu mobile aqui */}
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
            <div className="desktop_menu">
                {/* Conteúdo específicos do menu desktop aqui */}
            </div>
        </header>
    )
}

export default Header
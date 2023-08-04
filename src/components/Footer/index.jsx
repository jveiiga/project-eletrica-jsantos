import logoJsantos from "../../images/svg/logo-footer.svg"
import { BiCopyright } from "react-icons/bi"
import { BsWhatsapp } from "react-icons/bs"
import { BiLogoInstagram } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import logoNoweb from "../../images/svg/logo-noweb.svg"

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container-left-right-footer">
                <div className="container-left-footer">
                    <div>
                        <div className="container-logo-footer">
                            <img src={logoJsantos} />
                        </div>
                        <div className="container-text-logo-footer">
                            <p>
                                Venha na Elétrica J. Santos e garanta a melhor opção para sua casa!
                            </p>
                        </div>
                    </div>
                    <div className="container-copyright-footer">
                        <BiCopyright />
                        <p>
                            Copyright 2021 - Elétrica J. Santos - Todos os Direitos Reservados
                        </p>
                    </div>
                </div>
                <div className="container-right-footer">
                    <div>
                        <p>NOS SIGA NAS REDES</p>
                        <div className="container-icons-social-media-footer">
                            <BsWhatsapp />
                            <BiLogoInstagram />
                            <BsFacebook />
                        </div>
                    </div>  
                    <div className="container-noweb-information">
                        <p>Desenvolvido por</p>
                        <img src={logoNoweb} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
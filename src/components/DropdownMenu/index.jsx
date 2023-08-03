import { Link } from "react-router-dom"
import light from "../../images/svg/light-s3.svg"
import lust from "../../images/svg/lust-s3.svg"
import lighting from "../../images/svg/lighting-s3.svg"
import frame from "../../images/svg/frame-s3.svg"
import shower from "../../images/svg/shower-s3.svg"
import toolKit from "../../images/svg/tool-kit-s3.svg"
import cookerPan from "../../images/svg/cooker-pan.svg"
import cables from "../../images/svg/cables-s3.svg"
const DropdownMenu = () => {
    return (
        <ul className="container-list-dropdown">
            <li>
                <img src={light} />
                <Link to="/">Lâmpada</Link>
            </li>
            <li>
                <img src={lust} />
                <Link to="/">Lustres</Link>
            </li>
            <li>
                <img src={lighting} />
                <Link to="/">Luminárias</Link>
            </li>
            <li>
                <img src={frame} />
                <Link to="/">Decorações</Link>
            </li>
            <li>
                <img src={shower} />
                <Link to="/">Acessórios</Link>
            </li>
            <li>
                <img src={toolKit} />
                <Link to="/">Ferramentas</Link>
            </li>
            <li>
                <img src={cookerPan} />
                <Link to="/">Utensílios Domésticos</Link>
            </li>
            <li>
                <img src={cables} />
                <Link to="/">Cabos</Link>
            </li>
        </ul>
    );
};

export default DropdownMenu
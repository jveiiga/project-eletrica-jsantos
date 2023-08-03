import Button from "../Button"
import { AiOutlineArrowDown } from "react-icons/ai"
import detail1 from "../../images/svg/detail1-session1.svg"
import women from "../../images/svg/foto-women-session1.svg"
import lust from "../../images/svg/lust-session1.svg"
import stars from "../../images/svg/five-stars.svg"

const Session1 = () => {
  return (
    <section className="section-s1">
      <div className="container-content-s1">
        <div className="container-content-s1-left">
          <h1 className="title-s1">Ilumine o seu dia a dia!</h1>
          <p className="text-session1">
            Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a dia! Temos produtos para toda sua casa com a melhor qualidade e atendimento da região!
          </p>
          <Button
            className="button1-hover"
            name="VEJA NOSSOS PRODUTOS"
            color="var(--color-primary)"
            width="100%"
            height="63px"
            borderRadius="15px"
            backgroundColor="var( --color-secundary)"
            fontSize="18px"
            cursor="pointer"
          />
          <Button
            className="button2-hover"
            name="NOS CONHEÇA MELHOR"
            color="var(--color-white)"
            width="100%"
            height="63px"
            border="1px solid var(--color-white)"
            borderRadius="15px"
            fontSize="18px"
            cursor="pointer"
          />
          <div className="container-icon-text">
            <AiOutlineArrowDown className="icon-arrow" />
            <p className="text-icon-arrow">Role para ver mais</p>
          </div>
        </div>

        <div className="container-content-s1-right">
          <div className="container-photos-s1">
            <div className="container-photo-detail1">
              <img src={detail1} />
            </div>
            <div className="container-photo-detail2">
              <img src={detail1} />
            </div>
            <div className="container-photo-women">
              <img src={women} />
            </div>
            <div className="container-photo-lust">
              <img src={lust} />
            </div>
            <div className="container-photo-stars">
              <img src={stars} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Session1
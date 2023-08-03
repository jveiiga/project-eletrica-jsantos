import { SlLike } from "react-icons/sl"
import detail1 from "../../../images/svg/detail1-session4.svg"
import detail2 from "../../../images/svg/detail2-session4.svg"
import store from "../../../images/svg/store-image-s4.svg"
import Button from "../../../components/Button"

const Session4 = () => {
  return (
    <section className="section-session4">
      <div className="container-subtitle-s4">
        <h2>SUA MELHOR OPÇÃO</h2>
      </div>
      <div className="container-left-s4">
        <div className="container-images-s4">
          <div className="image-detail1-s4">
            <img src={detail1} />
          </div>
          <div className="image-detail2-s4">
            <img src={detail2} />
          </div>
          <div className="image-store-s4">
            <img src={store} />
          </div>
          <div className="container-image-like-s4">
            <div className="image-like-s4">
              <SlLike />
            </div>
          </div>
        </div>
        <div className="container-right-s4">
          <div className="container-text-s4">
            <p>
              Desde 1970 somos especializados em materiais elétricos, sendo uma das principais distribuidoras do setor.
              Oferecemos os melhores produtos, com o preço que cabe no seu bolso e atende todas as necessidades do seu dia a dia.
              Aqui você irá encontrar lustres, luminárias, utilidades domésticas, ferramentas, acessórios, lâmpadas, fios e cabos, quadros de distribuição, caixas de entrada padrão Eletropaulo, materiais elétricos em geral, equipamentos de segurança e comunicação.
            </p>
          </div>
          <div className="container-button-s4">
            <Button
              // className="button2-hover"
              name="SAIBA MAIS SOBRE NÓS"
              color="var(--color-white)"
              padding="0 60px"
              height="60px"
              border="1px solid var(--color-white)"
              borderRadius="15px"
              backgroundColor="var(--color-primary)"
              fontSize="18px"
              cursor="pointer"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Session4
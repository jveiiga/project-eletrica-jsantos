import detail from "../../images/svg/detail1-session2.svg"
import CardSession3 from "../CardSession3"
import light from "../../images/svg/light-s3.svg"
import lust from "../../images/svg/lust-s3.svg"
import lighting from "../../images/svg/lighting-s3.svg"
import frame from "../../images/svg/frame-s3.svg"
import shower from "../../images/svg/shower-s3.svg"
import toolKit from "../../images/svg/tool-kit-s3.svg"
import cookerPan from "../../images/svg/cooker-pan.svg"
import cables from "../../images/svg/cables-s3.svg"
import "../../components/CardSession3/style.css"

const Session3 = () => {
  return (
    <section className="section-session3">
      <div className="container-image-detail-s3">
        <img src={detail}/>
      </div>
      <div className="container-subtitle-cards-s3">
        <div className="container-subtitle-s3">
          <h2>Categorias</h2>
        </div>
        <div className="container-cards-s3">
          <CardSession3 
            name="LÂMPADAS"
            image={light}
          />
          <CardSession3 
            name="LUSTRES"
            image={lust}
          />
          <CardSession3 
            name="LUMINÁRIAS"
            image={lighting}
          />
          <CardSession3 
            name="DECORAÇÕES"
            image={frame}
          />
          <CardSession3 
            name="ACESSÓRIOS"
            image={shower}
          />
          <CardSession3 
            name="FERRAMENTAS"
            image={toolKit}
          />
          <CardSession3 
            name="UTENSÍLIOS DOMÉSTICOS"
            image={cookerPan}
          />
          <CardSession3 
            name="CABOS"
            image={cables}
          />
        </div>
      </div>
    </section>
  )
}

export default Session3
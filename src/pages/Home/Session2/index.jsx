import bg from "../../../images/svg/bg-session2.svg"
import detail1 from "../../../images/svg/detail1-session2.svg"
import detail2 from "../../../images/svg/detail2-session2.svg"
import CardSession2 from "../../../components/CardSession2"
import lust from "../../../images/svg/lust-image-s2.svg";
import light from "../../../images/svg/light-s2.svg"
import toolKit from "../../../images/svg/tool-kit-s2.svg";
import tableKit from "../../../images/svg/table-kit-s2.svg";
import shower from "../../../images/svg/shower-s2.svg";
import fan from "../../../images/svg/fan-s2.svg";
import socket from "../../../images/svg/socket-s2.svg";
import filterLine from "../../../images/svg/filter-line-s2.svg";

import "../../../components/CardSession2/style.css"

const Session2 = () => {
  return (
    <section className="section-session2">

      <div className="container-bg-s2">
        <div className="container-imageBg-s2">
          <img src={bg} />
        </div>
        <div className="container-imageDetail1-s2">
          <img src={detail1} />
        </div>
        <div className="container-imageDetail2-s2">
          <img src={detail2} />
        </div>
      </div>

      <div className="container-subtitle-s2">
        <h2>PRODUTOS EM DESTAQUE</h2>
      </div> 

      <div className="container-cards-s2">

        <CardSession2
          category="Lustres"
          image={lust}
          name="Lustre suspenso rústico"
          previosValue={1500}
          currentValue={1000}
          installments={3}
          valueInstallments={333.33}
        />
        <CardSession2
          category="Lâmpadas"
          image={light}
          name="Lâmpada premium"
          previosValue={60}
          currentValue={45}
          installments={2}
          valueInstallments={22.50}
        />
        <CardSession2
          category="Acessórios"
          image={filterLine}
          name="Filtro de linha"
          previosValue={25}
          currentValue={17}
          installments={1}
          valueInstallments={25.00}
        />
        <CardSession2
          category="Ferramentas"
          image={toolKit}
          name="Kit de ferramentas"
          previosValue={100}
          currentValue={80}
          installments={2}
          valueInstallments={40.00}
        />
        <CardSession2
          category="Utensílios domésticos"
          image={tableKit}
          name="Garfos de mesa inox"
          previosValue={15}
          currentValue={8}
          installments={1}
          valueInstallments={8.00}
        />
        <CardSession2
          category="Acessórios"
          image={shower}
          name="Chuveiro Premium"
          previosValue={120}
          currentValue={100}
          installments={4}
          valueInstallments={25.00}
        />
        <CardSession2
          category="Utensílios domésticos"
          image={fan}
          name="Ventilador 2 em 1, mesa e parede"
          previosValue={50}
          currentValue={30}
          installments={1}
          valueInstallments={30.00}
        />
        <CardSession2
          category="Acessórios"
          image={socket}
          name="Tomada dupla"
          previosValue={20}
          currentValue={10}
          installments={1}
          valueInstallments={10.00}
        />

      </div>
      
    </section>
  )
}

export default Session2
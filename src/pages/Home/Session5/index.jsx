import Button from "../../../components/Button"
import detail from "../../../images/svg/detail1-session5.svg"
import women from "../../../images/svg/foto-women-session5.svg"

const Session5 = () => {

  return (
    <section className="section-session5">

      <div className="container-left-right">

        <div className="container-left">

          <div className="image-detail-s5">
            <img src={detail} />
          </div>

          <div className="image-women-s5">
            <img src={women} />
          </div>

        </div>

        <div className="container-right">
          <Button
              //  className="button2-hover"
              name="ACIONE NOSSO TELEVENDAS"
              color="var(--color-primary)"
              padding="0 60px"
              height="60px"
              border="none"
              borderRadius="15px"
              backgroundColor="var(--color-secundary)"
              fontSize="18px"
              cursor="pointer"
          />
        </div>

      </div>

    </section>
  )
}

export default Session5
import PropTypes from "prop-types"

const CardSession2 = ({ category, image, name, previosValue, currentValue, installments, valueInstallments }) => {


  return (
    <div className="card-s2">
      <div className="category-card-s2">
        {category}
      </div>

      <img src={image} alt={name} />

      <hr className="hr" />

      <div className="container-name-card-s2">
        <div className="name-card-s2">{name}</div>
      </div>

      <div className="container-values-s2">
        <div className="previos-value-card-s2">
          {`R$ ${previosValue}`}
        </div>
        <div className="current-value-card-s2">
          {`R$ ${currentValue}`}
        </div>
      </div>

      <div className="container-payments-s2">
        <div className="installments-card-s2">
          {`ou em ${installments}x de`}
        </div>
        <div className="value-installments-card-s2">
          {` R$ ${valueInstallments}`}
        </div>
      </div>
    </div>
  );
};

export default CardSession2;

CardSession2.propTypes = {
  category: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  previosValue: PropTypes.number,
  currentValue: PropTypes.number,
  installments: PropTypes.number,
  valueInstallments: PropTypes.number,
}
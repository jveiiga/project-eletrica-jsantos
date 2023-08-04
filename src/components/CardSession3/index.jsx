import PropTypes from "prop-types"

const CardSession3 = ({ image, name }) => {

    return (
        <div className="card-s3">
            <div className="container-name-card-s3">
                <div className="name-card-s3">{name}</div>
            </div>
            <div className="container-image-s3">
                <img src={image} alt={name} />
            </div>
        </div>
    )
}

export default CardSession3;

CardSession3.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
}
import React from "react";
import './CardFront.css';
import PropTypes from 'prop-types';


const CardFront = ({ cardNumber, cardHolderName, cardDateM, cardDateY }) => {
    return (
    <div className="container_card_front">
    <div className="card_band"></div>
    <div className="band"></div>
    <div id="card-number" className="number_card">
        {cardNumber}
    </div>
    <p id="card-holder-name" className="name_card">
        {cardHolderName}
    </p>
    <div id="card-date" className="date_card">
        {cardDateM}/{cardDateY}
    </div>
    </div>
);
};

CardFront.propTypes = {
cardNumber: PropTypes.string.isRequired,
cardHolderName: PropTypes.string.isRequired,
cardDateM: PropTypes.string.isRequired,
cardDateY: PropTypes.string.isRequired,
};

export default CardFront;



import React from "react";
import './CardFront.css';



const CardFront = () => {
    return (

        <div className="container_card_front" >
            {/* <img src="../../assets/images/card-logo.svg" alt="" /> */}
            <div className="card_band"></div>
            <div className="band"></div>
            <div className="number_card">1234 5678 9123 0000</div>

            <p className="name_card">Nome do Titular</p>
            <div className="date_card">MM/YY</div>
        </div>
        

    )
}




export default CardFront;



import React from "react";
import './Body.css';
import Main from "../Main/Main";
import CardFront from "../CardFront/CardFront";
import CardBack from "../CardBack/CardBack";


const Body = () => {
    return (
        <div className="body_container">
            <span className="container_left"></span>
            <Main></Main>

            <CardFront></CardFront>
            <CardBack></CardBack>

        </div>
        
    )
}

export default Body;






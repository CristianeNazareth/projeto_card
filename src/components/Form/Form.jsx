import React, { useState } from "react";
import './Form.css';

const Form = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [cardDateM, setCardDateM] = useState("");
    const [cardDateY, setCardDateY] = useState("");
    const [cvc, setCvc] = useState("");
    const formSubmit = (e) => {
        e.preventDefault();

    const cardFrontProps = {
        cardNumber: cardNumber || "1234 5678 9123 0000",
        cardHolderName: cardHolderName || "Nome do Titular",
        cardDateM: cardDateM || "MM",
        cardDateY: cardDateY || "YY",
        cvc: cvc || "123",
    }
    updateCardFront(cardFrontProps)
}
    const updateCardFront = (cardFrontProps) => {
        document.getElementById('card-number').innerText = cardFrontProps.cardNumber;
        document.getElementById('card-holder-name').innerText = cardFrontProps.cardHolderName;
        document.getElementById('card-date').innerText = `${cardFrontProps.cardDateM}/${cardFrontProps.cardDateY}`
        document.getElementById('card-cvc').innerText = cardFrontProps.cvc;
    }
    return (
        <form onSubmit={formSubmit}>
        <div className="main_input">
            <p className="name letter">CARDHOLDER NAME</p>
            <input
            className="input_name"
            type="text"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            placeholder="e.g.Jane Appleseed"
        />
        </div>
        <div className="main_input">
            <p className="number letter">CARD NUMBER</p>
            <input
            className="input_number"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="e.g. 1234 5678 9123 0000"
            />
        </div>
        <div className="main_input">
            <p className="dateM letter">EXP. DATE (MM/YY)</p>
            <input
            className="input_dateM"
            type="number"
            value={cardDateM}
            onChange={(e) => setCardDateM(e.target.value)}
            placeholder="MM"
            />
            <input
            className="input_dateY"
            type="number"
            value={cardDateY}
            onChange={(e) => setCardDateY(e.target.value)}
            placeholder="YY"
            />
        </div>
        <div className="main_input">
            <p className="cvc letter">CVC</p>
            <input
            className="input_cvc"
            type="number"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            placeholder="e.g. 123"
            />
        </div>
        <button className="btn_confirm" type="submit">
            Confirm
        </button>
    </form>
  )
}

export default Form;


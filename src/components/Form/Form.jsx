import React, { useState } from "react";
import './Form.css';



const Form = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const [dateM, setDateM] = useState('');
    const [dateY, setDateY] = useState('');

    const [cvc, setCvc] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();

        console.log('Nome:', name)
        console.log('Numero:', number)

        console.log('Data:', dateM)
        console.log('Data:', dateY)

        console.log('cvc:', cvc)
    }

    return (
        <form onSubmit={formSubmit} >


        <div className="main_input">
            <p className="name letter">CARDHOLDER NAME</p>
            <input className="input_name" type="text" value={name} onchange={(e) => setName(e.target.value)} placeholder="e.g.Jane Appleseed" />
        </div>

        <div className="main_input">
            <p className="number letter">CARD NUMBER</p>
            <input className="input_number" type="number" value={number} onchange={(e) => setNumber(e.target.value)} placeholder="e.g. 1234 5678 9123 0000" />
        </div>

        <div className="main_input">
            <p className="dateM letter">EXP. DATE (MM/YY)</p>

            <input className="input_dateM" type="number" value={dateM} onchange={(e) => setDateM(e.target.value)} placeholder="MM" />

            <input className="input_dateY" type="number" value={dateY} onchange={(e) => setDateY(e.target.value)} placeholder="YY" />

        </div>


        <div className="main_input">
            <p className="cvc letter">CVC</p>
            <input className="input_cvc" type="number" value={cvc} onchange={(e) => setCvc(e.target.value)} placeholder="e.g. 123" />
        </div>


        <button className="btn_confirm" type="submit">Confirm</button>
    </form>
    )
}

export default Form;



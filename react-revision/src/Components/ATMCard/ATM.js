import React, { useState } from "react";
import "./ATM.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const ATM = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [focus, setFocus] = useState("");
  return (
    <>
      <h1>Credit Card</h1>
      <div>
        <br />
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvv={cvv}
          focused={focus}
        />
        <br />
        <form>
          Enter Card No :{" "}
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <br />
          <br />
          Enter Your Name :{" "}
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <br />
          <br />
          Card Expiry Date :{" "}
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY Expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <br />
          <br />
          CVV Number :{" "}
          <input
            type="tel"
            name="cvv"
            placeholder="CVV Number"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </form>
      </div>
    </>
  );
};

export default ATM;

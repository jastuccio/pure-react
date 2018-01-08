import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./index.css";

// Create a CreditCard component based on this design. Style it up with CSS or inline styles. Accept a cardInfo prop that contains the person’s name, expiration date, credit card number, and bank name.

function CreditCard ({ cardInfo }) {
  var { personName, expiration, ccnumber, bankName } = cardInfo;

  const firstFourDigits = ccnumber.substring(0,4);

  return (
    <div className="credit-card">
      <div className="bank-name">{bankName}</div>
      <div className="person-name">{personName}</div>
      <div className="expiration">
        <span>month/year</span>
        <span>valid thru</span>
        {expiration}
      </div>
      <div className="cc-number">
        {ccnumber}
        <br/>
        {firstFourDigits}
      </div>

    </div>
  );
};
CreditCard.propTypes = {
  cardData: PropTypes.shape({
    personName: PropTypes.string,
    expiration: PropTypes.number,
    ccnumber: PropTypes.number,
    bankName: PropTypes.string
  })
};

const personInfo = {
  personName: "fake person",
  expiration: "08/19",
  ccnumber: "1234 5678 8765 4321",
  bankName: "BayBank"
};

// ReactDOM.render(<CreditCard />, document.getElementById("root"));

ReactDOM.render(
    <CreditCard cardInfo={personInfo} />,
  document.getElementById("root")
);

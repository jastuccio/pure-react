import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./index.css";

const Stamp = () => {
  return (
    <div className="stamp">
      <img
        src="http://res.cloudinary.com/jastuccio/image/upload/t_media_lib_thumb/v1514299561/tech-logos/github-octocat-dayofthedead.jpg"
        alt="fake postage stamp"
      />
    </div>
  );
};

const AddressLabel = ({ mailingLabel, className }) => {
  var { fullName, addressLine1, addressLine2 } = mailingLabel;
  return (
    <div className={`mailing-label ${className}`} >
      <div className="full-name">{fullName}</div>
      <div className="street-address">{addressLine1}</div>
      <div className="city-state-zip">{addressLine2}</div>
    </div>
  );
};
AddressLabel.propTypes = {
  mailingLabel: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired
  }).isRequired
};

const Envelope = ({ toLabel, fromLabel }) => {
  return (
    <div className="envelope">
      <AddressLabel className="from-label" mailingLabel={fromLabel} />
      <Stamp />
      <AddressLabel className="to-label" mailingLabel={toLabel} />
    </div>
  );
};
Envelope.propTypes = {
  fromLabel: PropTypes.object,
  toLabel: PropTypes.object
};

var sender = {
  fullName: "Mr. Sender",
  addressLine1: "123 Fake St.",
  addressLine2: "Boston, MA 02118"
};

var recipient = {
  fullName: "Mrs. Receiver",
  addressLine1: "123 Fake St.",
  addressLine2: "San Francisco, CA 94101"
};

ReactDOM.render(
  <Envelope fromLabel={sender} toLabel={recipient} />,
  document.getElementById("root")
);

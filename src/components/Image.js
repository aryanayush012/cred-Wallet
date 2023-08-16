import React from "react";

const Image = (props) => {
  function getImage() {
    if (props.type === "visa") {
      return "type/visa.png";
    } else if (props.type === "visaelectron") {
      return "type/visaelectron.png";
    } else if (props.type === "mastercard") {
      return "type/mastercard.png";
    } else if (props.type === "amex") {
      return "type/amex.png";
    } else if (props.type === "dinersclub") {
      return "type/dinersclub.png";
    } else if (props.type === "discover") {
      return "discover.png";
    } else if (props.type === "unionpay") {
      return "type/unionpay.png";
    } else if (props.type === "jcb") {
      return "jcb.png";
    } else if (props.type === "maestro") {
      return "maestro.png";
    } else if (props.type === "forbrugsforeningen") {
      return "type/forbrugs.webp";
    } else if (props.type === "dankort") {
      return "type/dankort.png";
    } else {
      return "type/nothing.png";
    }
  }

  return (
    <div>
      <img style={{ height: "30%", width: "40px" }} src={getImage()} />
    </div>
  );
};

export default Image;

import React from "react";

const Bank = (props) => {
  function getImage() {
    if (props.type === "ALLAHABAD BANK") {
      return "bank/ALLAHABAD BANK.png";
    } else if (props.type === "ANDHRA BANK") {
      return "bank/ANDHRA BANK.png";
    } else if (props.type === "AXIS BANK") {
      return "bank/AXIS BANK.png";
    } else if (props.type === "STATE BANK OF INDIA") {
      return "bank/STATE BANK OF INDIA.png";
    } else if (props.type === "BANK OF BARODA") {
      return "bank/BANK OF BARODA.png";
    } else if (props.type === "UCO BANK") {
      return "bank/UCO BANK.png";
    } else if (props.type === "UNION BANK OF INDIA") {
      return "bank/UNION BANK OF INDIA.png";
    } else if (props.type === "BANK OF INDIA") {
      return "bank/BANK OF INDIA.png";
    } else if (props.type === "BANDHAN BANK LIMITED") {
      return "bank/BANDHAN BANK LIMITED.png";
    } else if (props.type === "CANARA BANK") {
      return "bank/CANARA BANK.png";
    } else if (props.type === "GRAMIN VIKASH BANK") {
      return "bank/GRAMIN VIKASH BANK.png";
    } else if (props.type === "CORPORATION BANK") {
      return "bank/CORPORATION BANK.png";
    } else if (props.type === "INDIAN BANK") {
      return "bank/INDIAN BANK.png";
    } else if (props.type === "INDIAN OVERSEAS BANK") {
      return "bank/INDIAN OVERSEAS BANK.png";
    } else if (props.type === "ORIENTAL BANK OF COMMERCE") {
      return "bank/ORIENTAL BANK OF COMMERCE.png";
    } else if (props.type === "PUNJAB AND SIND BANK") {
      return "bank/PUNJAB AND SIND BANK.png";
    } else if (props.type === "PUNJAB NATIONAL BANK") {
      return "bank/PUNJAB NATIONAL BANK.png";
    } else if (props.type === "RESERVE BANK OF INDIA") {
      return "bank/RESERVE BANK OF INDIA.png";
    } else if (props.type === "SOUTH INDIAN BANK") {
      return "bank/SOUTH INDIAN BANK.png";
    } else if (props.type === "UNITED BANK OF INDIA") {
      return "bank/UNITED BANK OF INDIA.png";
    } else if (props.type === "CENTRAL BANK OF INDIA") {
      return "bank/CENTRAL BANK OF INDIA.png";
    } else if (props.type === "VIJAYA BANK") {
      return "bank/VIJAYA BANK.png";
    } else if (props.type === "DENA BANK") {
      return "bank/DENA BANK.png";
    } else if (props.type === "BHARATIYA MAHILA BANK LIMITED") {
      return "bank/BHARATIYA MAHILA BANK LIMITED.png";
    } else if (props.type === "FEDERAL BANK LTD") {
      return "bank/FEDERAL BANK LTD.png";
    } else if (props.type === "HDFC BANK LTD") {
      return "bank/HDFC BANK LTD.png";
    } else if (props.type === "ICICI BANK LTD") {
      return "bank/ICICI BANK LTD.png";
    } else if (props.type === "IDBI BANK LTD") {
      return "bank/IDBI BANK LTD.png";
    } else if (props.type === "PAYTM BANK") {
      return "bank/PAYTM BANK.png";
    } else if (props.type === "FINO PAYMENT BANK") {
      return "bank/FINO PAYMENT BANK.png";
    } else if (props.type === "INDUSIND BANK LTD") {
      return "bank/INDUSIND BANK LTD.png";
    } else if (props.type === "KARNATAKA BANK LTD") {
      return "bank/KARNATAKA BANK LTD.png";
    } else if (props.type === "KOTAK MAHINDRA BANK") {
      return "bank/KOTAK MAHINDRA BANK.png";
    } else if (props.type === "YES BANK LTD") {
      return "bank/YES BANK LTD.png";
    } else if (props.type === "SYNDICATE BANK") {
      return "bank/SYNDICATE BANK.png";
    } else if (props.type === "SBM Bank India") {
      return "bank/SBM Bank India.png";
    } else if (props.type === "BANK OF MAHARASHTRA") {
      return "bank/BANK OF MAHARASHTRA.png";
    } else {
      return "bank/nothing.png";
    }
  }
  return (
    <div>
      <img style={{ height: "20%", width: "20%" }} src={getImage()} />
    </div>
  );
};

export default Bank;

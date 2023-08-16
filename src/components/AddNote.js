import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./CardStyle.css";
import creditcardutils from "creditcardutils";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    BankName: "",
    CardNumber: "",
    CardHolderName: "",
    ExpiryDate: "",
    cvc: "",
    focus: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(
      note.BankName,
      note.CardNumber,
      note.CardHolderName,
      note.ExpiryDate,
      note.cvc
    );
    setNote({
      BankName: "",
      CardNumber: "",
      CardHolderName: "",
      ExpiryDate: "",
      cvc: "",
    });
    props.handleAlert("Notes Added Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleInputFocus = (evt) => {
    setNote({ ...note, focus: evt.target.name });
  };
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col" style={{ marginTop: "10%" }}>
          <Cards
            cvc={note.cvc}
            expiry={note.ExpiryDate}
            name={note.CardHolderName}
            number={note.CardNumber}
            focused={note.focus}
          />
        </div>
        <div className="col frm">
          <h2 className="my-3 text-center">Add Your Card Here</h2>
          <form className="my-3">
            <div className="mb-3">
              <select
                name="BankName"
                className="form-control"
                required
                id="BankName"
                onChange={onChange}
              >
                <option selected="selected" value={note.BankName}>
                  --Select --
                </option>
                <option value="ALLAHABAD BANK">ALLAHABAD BANK </option>
                <option value="ANDHRA BANK">ANDHRA BANK</option>
                <option value="AXIS BANK">AXIS BANK</option>
                <option value="STATE BANK OF INDIA">STATE BANK OF INDIA</option>
                <option value="BANK OF BARODA">BANK OF BARODA</option>
                <option value="UCO BANK">UCO BANK</option>
                <option value="UNION BANK OF INDIA">UNION BANK OF INDIA</option>
                <option value="BANK OF INDIA">BANK OF INDIA</option>
                <option value="BANDHAN BANK LIMITED">
                  BANDHAN BANK LIMITED
                </option>
                <option value="CANARA BANK">CANARA BANK</option>
                <option value="GRAMIN VIKASH BANK">GRAMIN VIKASH BANK</option>
                <option value="CORPORATION BANK">CORPORATION BANK</option>
                <option value="INDIAN BANK">INDIAN BANK</option>
                <option value="INDIAN OVERSEAS BANK">
                  INDIAN OVERSEAS BANK
                </option>
                <option value="ORIENTAL BANK OF COMMERCE">
                  ORIENTAL BANK OF COMMERCE
                </option>
                <option value="PUNJAB AND SIND BANK">
                  PUNJAB AND SIND BANK
                </option>
                <option value="PUNJAB NATIONAL BANK">
                  PUNJAB NATIONAL BANK
                </option>
                <option value="RESERVE BANK OF INDIA">
                  RESERVE BANK OF INDIA
                </option>
                <option value="SOUTH INDIAN BANK">SOUTH INDIAN BANK</option>
                <option value="UNITED BANK OF INDIA">
                  UNITED BANK OF INDIA
                </option>
                <option value="CENTRAL BANK OF INDIA">
                  CENTRAL BANK OF INDIA
                </option>
                <option value="VIJAYA BANK">VIJAYA BANK</option>
                <option value="DENA BANK">DENA BANK</option>
                <option value="BHARATIYA MAHILA BANK LIMITED">
                  BHARATIYA MAHILA BANK LIMITED
                </option>
                <option value="FEDERAL BANK LTD">FEDERAL BANK LTD </option>
                <option value="HDFC BANK LTD">HDFC BANK LTD</option>
                <option value="ICICI BANK LTD">ICICI BANK LTD</option>
                <option value="IDBI BANK LTD">IDBI BANK LTD</option>
                <option value="PAYTM BANK">PAYTM BANK</option>
                <option value="FINO PAYMENT BANK">FINO PAYMENT BANK</option>
                <option value="INDUSIND BANK LTD">INDUSIND BANK LTD</option>
                <option value="KARNATAKA BANK LTD">KARNATAKA BANK LTD</option>
                <option value="KOTAK MAHINDRA BANK">KOTAK MAHINDRA BANK</option>
                <option value="YES BANK LTD">YES BANK LTD</option>
                <option value="SYNDICATE BANK">SYNDICATE BANK</option>
                <option value="SBM Bank India">SBM Bank India</option>
                <option value="BANK OF MAHARASHTRA">BANK OF MAHARASHTRA</option>
              </select>
            </div>
            <div className="mb-3 ip">
              <input
                type="number"
                className="form-control"
                id="CardNumber"
                name="CardNumber"
                onChange={onChange}
                onFocus={handleInputFocus}
                placeholder="Card Number"
                required
                maxLength={16}
                value={note.CardNumber}
              />
              <p>
                {!creditcardutils.validateCardNumber(note.CardNumber) ? null : (
                  <>&#9989;</>
                )}
              </p>
            </div>
            <div className="mb-3 ip">
              <input
                type="text"
                className="form-control"
                id="CardHolderName"
                name="CardHolderName"
                onChange={onChange}
                onFocus={handleInputFocus}
                placeholder="Name"
                required
                value={note.CardHolderName}
              />
              <p>{!note.CardHolderName ? null : <>&#9989;</>}</p>
            </div>
            <div className="mb-3 ip">
              <input
                type="text"
                className="form-control"
                id="ExpiryDate"
                name="ExpiryDate"
                onChange={onChange}
                onFocus={handleInputFocus}
                placeholder="Expiry Date (MM/YY)"
                maxLength={5}
                required
                value={note.ExpiryDate}
              />
              <p>
                {!creditcardutils.validateCardExpiry(
                  creditcardutils.parseCardExpiry(note.ExpiryDate)
                ) ? null : (
                  <>&#9989;</>
                )}
              </p>
            </div>
            <div className="mb-3 ip">
              <input
                type="text"
                className="form-control"
                id="cvc"
                name="cvc"
                onChange={onChange}
                onFocus={handleInputFocus}
                placeholder="CVV"
                required
                maxLength={4}
                value={note.cvc}
              />
              <p>
                {!creditcardutils.validateCardCVC(note.cvc) ? null : (
                  <>&#9989;</>
                )}
              </p>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className={`btn btn-${
                  !creditcardutils.validateCardNumber(note.CardNumber) ||
                  !creditcardutils.validateCardExpiry(
                    creditcardutils.parseCardExpiry(note.ExpiryDate)
                  ) ||
                  !creditcardutils.validateCardCVC(note.cvc)
                    ? "danger"
                    : "success"
                } shadow p-3 mb-5 rounded`}
                disabled={
                  !creditcardutils.validateCardNumber(note.CardNumber) ||
                  !creditcardutils.validateCardExpiry(
                    creditcardutils.parseCardExpiry(note.ExpiryDate)
                  ) ||
                  !creditcardutils.validateCardCVC(note.cvc)
                }
                onClick={handleClick}
                onFocus={handleInputFocus}
              >
                Add Card
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;

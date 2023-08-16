import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useHistory } from "react-router-dom";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const Notes = (props) => {
  const context = useContext(noteContext);
  let history = useHistory();
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history.push("/login");
    }
    //eslint - disable - next - line;
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    eBankName: "",
    eCardNumber: "",
    eCardHolderName: "",
    eExpiryDate: "",
    cvc: "",
    focus: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      eBankName: currentNote.BankName,
      eCardNumber: currentNote.CardNumber,
      eCardHolderName: currentNote.CardHolderName,
      eExpiryDate: currentNote.ExpiryDate,
      cvc: currentNote.cvc,
    });
  };

  const handleClick = (e) => {
    console.log("Updating the note...", note);
    editNote(
      note.id,
      note.eBankName,
      note.eCardNumber,
      note.eCardHolderName,
      note.eExpiryDate,
      note.cvc
    );
    refClose.current.click();
    props.handleAlert("Notes Updated Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleInputFocus = (evt) => {
    setNote({ ...note, focus: evt.target.name });
  };

  return (
    <>
      <AddNote handleAlert={props.handleAlert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ backgroundColor: "#3D3D3D" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Card Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Cards
                cvc={note.cvc}
                expiry={note.eExpiryDate}
                name={note.eCardHolderName}
                number={note.eCardNumber}
                focused={note.focus}
              />
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="BankName" className="form-label">
                    Bank Name
                  </label>
                  <select
                    name="eBankName"
                    className="form-control"
                    required
                    id="eBankName"
                    onChange={onChange}
                  >
                    <option selected="selected" value={note.eBankName}>
                      --Select --
                    </option>
                    <option value="ALLAHABAD BANK">ALLAHABAD BANK </option>
                    <option value="ANDHRA BANK">ANDHRA BANK</option>
                    <option value="AXIS BANK">AXIS BANK</option>
                    <option value="STATE BANK OF INDIA">
                      STATE BANK OF INDIA
                    </option>
                    <option value="BANK OF BARODA">BANK OF BARODA</option>
                    <option value="UCO BANK">UCO BANK</option>
                    <option value="UNION BANK OF INDIA">
                      UNION BANK OF INDIA
                    </option>
                    <option value="BANK OF INDIA">BANK OF INDIA</option>
                    <option value="BANDHAN BANK LIMITED">
                      BANDHAN BANK LIMITED
                    </option>
                    <option value="CANARA BANK">CANARA BANK</option>
                    <option value="GRAMIN VIKASH BANK">
                      GRAMIN VIKASH BANK
                    </option>
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
                    <option value="KARNATAKA BANK LTD">
                      KARNATAKA BANK LTD
                    </option>
                    <option value="KOTAK MAHINDRA BANK">
                      KOTAK MAHINDRA BANK
                    </option>
                    <option value="YES BANK LTD">YES BANK LTD</option>
                    <option value="SYNDICATE BANK">SYNDICATE BANK</option>
                    <option value="SBM Bank India">SBM Bank India</option>
                    <option value="BANK OF MAHARASHTRA">
                      BANK OF MAHARASHTRA
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="CardNumber" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eCardNumber"
                    name="eCardNumber"
                    value={note.eCardNumber}
                    onChange={onChange}
                    onFocus={handleInputFocus}
                    minLength={12}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="CardHolderName" className="form-label">
                    CardHolderName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eCardHolderName"
                    name="eCardHolderName"
                    value={note.eCardHolderName}
                    onFocus={handleInputFocus}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ExpiryDate" className="form-label">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eExpiryDate"
                    name="eExpiryDate"
                    value={note.eExpiryDate}
                    onFocus={handleInputFocus}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cvc" className="form-label">
                    cvc
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvc"
                    name="cvc"
                    value={note.cvc}
                    onChange={onChange}
                    onFocus={handleInputFocus}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2 style={{ marginTop: "10%" }} className="text-center">
          Your Cards
        </h2>
        {notes.length === 0 && "No Cards to display"}
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              updateNote={updateNote}
              handleAlert={props.handleAlert}
              note={note}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;

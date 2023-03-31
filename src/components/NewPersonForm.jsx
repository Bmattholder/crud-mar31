import React, { useState } from "react";

import "./NewPersonForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function NewPersonForm() {
  const [newPersonFormData, setNewPersonFormData] = useState({
    praenomens: [""],
    cognomen: "",
    number: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const { praenomens, cognomen, number, street, city, state, zip } =
    newPersonFormData;

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    if (e.target.name === "praenomens") {
      setNewPersonFormData((p) => ({
        ...p,
        [e.target.name]: e.target.value.split(),
      }));
    } else {
      setNewPersonFormData((p) => ({
        ...p,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:8080/api/v1/people",
      newPersonFormData
    );
    console.log(res);
    navigate("/");
  };

  return (
    <form className="new-person-form" onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="new-person-input"
        name="praenomens"
        id="praenomens"
        value={praenomens}
        onChange={onChangeHandler}
        placeholder="Praenomens"
        required
      />
      <input
        type="text"
        className="new-person-input"
        name="cognomen"
        id="cognomen"
        value={cognomen}
        onChange={onChangeHandler}
        placeholder="Cognomen"
        required
      />
      <input
        type="text"
        className="new-person-input"
        name="number"
        id="number"
        value={number}
        onChange={onChangeHandler}
        placeholder="Number"
        required
      />
      <input
        type="text"
        className="new-person-input"
        name="street"
        id="street"
        value={street}
        onChange={onChangeHandler}
        placeholder="Street"
        required
      />
      <input
        type="text"
        className="new-person-input"
        name="city"
        id="city"
        value={city}
        onChange={onChangeHandler}
        placeholder="City"
        required
      />
      <input
        type="text"
        className="new-person-input"
        name="state"
        id="state"
        value={state}
        onChange={onChangeHandler}
        placeholder="State"
        required
      />
      <input
        type="text"
        className="new-person-input"
        name="zip"
        id="zip"
        value={zip}
        onChange={onChangeHandler}
        placeholder="Zip"
        required
      />
      <button className="new-person-button">Submit</button>
    </form>
  );
}

export default NewPersonForm;

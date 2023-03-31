import React, { Fragment, useState } from "react";

import "./Person.css";
import axios from "axios";

function Person({ id, firstName, lastName, address, setToggleHelper }) {
  const [editMode, setEditMode] = useState(false);
  const [editPersonForm, setEditPersonForm] = useState({
    praenomens: firstName,
    cognomen: lastName,
    number: address.number,
    street: address.street,
    city: address.city,
    state: address.state,
    zip: address.zip,
  });

  const { praenomens, cognomen, number, street, city, state, zip } =
    editPersonForm;

  const url = `http://localhost:8080/api/v1/people`;

  const resetStateHelper = () => {
    setEditPersonForm({
      praenomens: firstName,
      cognomen: lastName,
      number: address.number,
      street: address.street,
      city: address.city,
      state: address.state,
      zip: address.zip,
    });
    editModeHelper();
  };

  const editModeHelper = () => {
    setEditMode(!editMode);
  };

  const onChangeHandler = (e) => {
    if (e.target.name === "praenomens") {
      setEditPersonForm((p) => ({
        ...p,
        [e.target.name]: e.target.value.split(),
      }));
    } else {
      setEditPersonForm((p) => ({
        ...p,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onSubmitHandler = async (e, id) => {
    e.preventDefault();
    const res = await axios.patch(url + "/" + id, editPersonForm);
    console.log(res);
    editModeHelper();
    setToggleHelper();
  };

  const deleteHandler = async (id) => {
    const res = await axios.delete(url + "/" + id);
    console.log(res);
    setToggleHelper();
  };

  return (
    <div className="card">
      {!editMode ? (
        <Fragment>
          <h2>
            {id}: {firstName} {lastName}
          </h2>
          <p>
            {address.number} {address.street}
          </p>
          <p>
            {address.city} {address.state} {address.zip}
          </p>
          <button className="edit-person-button" onClick={editModeHelper}>
            Edit
          </button>
          <button
            className="edit-person-button-danger"
            onClick={() => deleteHandler(id)}
          >
            Delete
          </button>
        </Fragment>
      ) : (
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            className="edit-person-input"
            name="praenomens"
            id="praenomens"
            value={praenomens}
            onChange={onChangeHandler}
            placeholder="Praenomens"
            required
          />
          <input
            type="text"
            className="edit-person-input"
            name="cognomen"
            id="cognomen"
            value={cognomen}
            onChange={onChangeHandler}
            placeholder="Cognomen"
            required
          />
          <input
            type="text"
            className="edit-person-input"
            name="number"
            id="number"
            value={number}
            onChange={onChangeHandler}
            placeholder="Number"
            required
          />
          <input
            type="text"
            className="edit-person-input"
            name="street"
            id="street"
            value={street}
            onChange={onChangeHandler}
            placeholder="Street"
            required
          />
          <input
            type="text"
            className="edit-person-input"
            name="city"
            id="city"
            value={city}
            onChange={onChangeHandler}
            placeholder="City"
            required
          />
          <input
            type="text"
            className="edit-person-input"
            name="state"
            id="state"
            value={state}
            onChange={onChangeHandler}
            placeholder="State"
            required
          />
          <input
            type="text"
            className="edit-person-input"
            name="zip"
            id="zip"
            value={zip}
            onChange={onChangeHandler}
            placeholder="Zip"
            required
          />
          <button
            className="edit-person-button"
            onClick={(e) => onSubmitHandler(e, id)}
          >
            Submit
          </button>
          <button
            className="edit-person-button-danger"
            onClick={resetStateHelper}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}

export default Person;

import React from "react";
import Person from "./Person";

import "./List.css";

function List({ peopleList, setToggleHelper }) {
  return peopleList.map((person) => {
    return (
      <Person
        key={person.id}
        id={person.id}
        firstName={person.personalName.givenNames[0].value}
        lastName={person.personalName.surname.value}
        address={person.address}
        setToggleHelper={setToggleHelper}
      />
    );
  });
}

export default List;

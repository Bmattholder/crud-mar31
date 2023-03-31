import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Size from "./Size";
import List from "./List";
import Pagination from "./Pagination";
import Filter from "./Filter";

function Home() {
  const [peopleList, setPeopleList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);
  const [totalPages, setTotalPages] = useState(0);
  const [filterText, setFilterText] = useState("");

  const url = `http://localhost:8080/api/v1/people?page=${page}&size=${size}`;

  const setToggleHelper = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    async function getPeopleData() {
      const res = await axios.get(url);
      const data = res.data;
      setPeopleList(data.content);
      setTotalPages(data.totalPages);
    }
    getPeopleData();
  }, [url, toggle]);

  const filteredPeopleList = filterText
    ? peopleList.filter(
        (person) => person.personalName.givenNames[0].value === filterText
      )
    : peopleList;

  return (
    <Fragment>
      <div className="home-container">
        <Size size={size} onSizeChange={setSize} />
        <Filter peopleList={peopleList} onFilterChange={setFilterText} />
      </div>
      <List setToggleHelper={setToggleHelper} peopleList={filteredPeopleList} />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </Fragment>
  );
}

export default Home;

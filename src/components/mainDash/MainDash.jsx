import React from "react";
import "./MainDash.css";
import { Cards } from "../cards/Cards";
import TablePage from "../Table/TablePage";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <TablePage />
    </div>
  );
};

export default MainDash;

import React from "react";
import Table from "react-bootstrap/Table";
import "./TablePage.css";

const rows = [
  {
    name: "Lasania Chicken Fry",
    trackingId: 18908424,
    date: "2 March 2025",
    status: "Approved",
  },
  {
    name: "Chicken Parmi",
    trackingId: 18908424,
    date: "2 March 2025",
    status: "Approved",
  },
  {
    name: "Pasta",
    trackingId: 18908424,
    date: "2 March 2025",
    status: "Pending",
  },
  {
    name: "Cheese Cake",
    trackingId: 18908424,
    date: "2 March 2025",
    status: "Pending",
  },
  {
    name: "Shushi",
    trackingId: 18908424,
    date: "2 March 2025",
    status: "Approved",
  },
  {
    name: "Bread",
    trackingId: 18908424,
    date: "2 March 2025",
    status: "Rejected",
  },
];

const TablePage = () => {
  return (
    <div className="TableContainer">
      <h2 className="table-title">Latest Orders</h2>
      <Table className="custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Tracking Id</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((input, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{input.name}</td>
              <td>{input.trackingId}</td>
              <td>{input.date}</td>
              {input.status === "Approved" && (
                <td className="Approved">{input.status}</td>
              )}
              {input.status === "Pending" && (
                <td className="Pending">{input.status}</td>
              )}
              {input.status === "Rejected" && (
                <td className="Rejected">{input.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TablePage;

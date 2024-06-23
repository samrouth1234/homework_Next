"use client";
import DataTable from "react-data-table-component";
import React, { useState, useEffect } from "react";
export default function TableList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("data", data);
      });
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      grow: 2,
    },
    {
      name: "Name",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      right: true,
      conditionalCellStyles: [
        {
          when: (row) => row.price < 300,
          style: {
            backgroundColor: "rgba(63, 195, 128, 0.9)",
            color: "white",
            "&:hover": {
              cursor: "pointer",
            },
          },
        },
        {
          when: (row) => row.price >= 400,
          style: {
            backgroundColor: "rgba(242, 38, 19, 0.9)",
            color: "white",
            "&:hover": {
              cursor: "not-allowed",
            },
          },
        },
      ],
    },
    {
      name: "Description",
      selector: (row) => row.description.slice(0, 30),
      sortable: true,
    }
  ];

  return (
    <main>
      <div className="container">
        <DataTable
          title="Desserts - Conditional Cells"
          columns={columns}
          data={data}
          pagination
          subHeader
          selectableRows
          fixedHeader
          fixedHeaderScrollHeight="500px"
        />
      </div>
    </main>
  );
}

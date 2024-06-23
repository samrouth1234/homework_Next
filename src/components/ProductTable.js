"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

export default function MyComponent() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  const handleFilter = (e) => {
    const value = e.target.value;
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const columns = [
    {
      name: "Product",
      selector: (row) => row.title,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Category",
      selector: (row) => row.description.slice(0, 30),
    },
    {
      name: "Photo",
      cell: (row) => (
        <Image height="70px" width="60px" alt={row.name} src={row.images} />
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button type="button" class="btn btn-primary m-2">
            Edit
          </button>
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </>
      ),
    },
  ];
  return (
    <div className="container mt-5">
      <div>
        <h1>Product Collectoin List</h1>
        <div className="text-end">
          <input
            className="p-2 w-25 "
            type="text"
            placeholder="Search product list"
            onChange={handleFilter}
          />
        </div>
      </div>
      <DataTable
        title="Product List"
        columns={columns}
        data={filteredData}
        pagination
      />
    </div>
  );
}

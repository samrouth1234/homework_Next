
import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';

export default function MyComponent() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json()
                .then((data) => setData(data))
            )
    }, []);
    const columns = [
        {
            name: 'Product',
            selector: row => row.title,
        },
        {
            name: 'Price',
            selector: row => row.price,
        },
        {
            name: 'Category',
            selector: row => row.description,
        },
        {
            name: 'Photo',
		    cell: row =><img height="70px" width="60px" alt={row.name} src={row.images} />,
        },
        {
            name: 'Action',
            cell: row => <div> <button type="button" class="btn btn-primary">Edit</button> <button type="button" class="btn btn-danger">Delete</button></div>,
        },
    ];

    return (
        <div className='container mt-5'>
            <div>
                <h1>Product Collectoin List</h1>
                <div className='text-end'>
                    <input type="text" name="search" placeholder="Search.." className='p-2 rounded'/>
                </div>
            </div>
            <DataTable
                title="Product List"
                columns={columns}
                data={data}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="500px"
            />
        </div>
    );
};
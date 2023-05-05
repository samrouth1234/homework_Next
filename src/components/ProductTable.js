
import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';

export default function MyComponent() {
    const [data, setData] = useState([]);
    const [searchApiData,setSearchApiData]=useState([]);
    const[filterVal,setFilterVal]=useState("");
    useEffect(() => {
        const fetchData=()=>{
            fetch(`https://api.escuelajs.co/api/v1/products`)
            .then((response) => response.json()
                .then(json => {
                    setData(json)
                    setSearchApiData(json)
                })
            )
        }
        fetchData();
    }, []);
    const handleFilter=(e)=>{
        if(e.target.value == ''){
            setData(searchApiData)
        }else{
           const filterResult= searchApiData.filter (item => item.title.toLowerCase(e.target.value.toLowerCase())|| item.price.toLowerCase(e.target.value.toLowerCase())||item.description.toLowerCase(e.target.value.toLowerCase()))
           setData(filterResult)
        }
        setFilterVal(e.target.value)
    }

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
            selector: row => row.description.slice(0, 30),
        },
        {
            name: 'Photo',
            cell: row => <img height="70px" width="60px" alt={row.name} src={row.images} />,
        },
        {
            name: 'Action',
            cell: row => <><button type="button" class="btn btn-primary m-2">Edit</button><button type="button" class="btn btn-danger">Delete</button></>,
        },
    ];
    return (
        <div className='container mt-5'>
            <div>
                <h1>Product Collectoin List</h1>
                <div className="text-end">
                <input className="p-2 w-25 " type="text" placeholder="Search product list" value={filterVal} onInput={(e)=>handleFilter(e)}/>
                </div>
            </div>
            <DataTable
                title="Product List"
                columns={columns}
                data={data}
                pagination
            />
        </div>
    );
}
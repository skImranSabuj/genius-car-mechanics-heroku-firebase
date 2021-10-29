import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, []);
    // axios.get('http://localhost:5000/services')
    //     .then(res => {
    //         console.log(res);
    //         setServices(res.data)
    //     });
    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure?');
        if (confirmDelete) {
            const url = `http://localhost:5000/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        const remaingServices = services.filter(data => data._id !== id);
                        setServices(remaingServices)
                    }
                })
        }
    }
    return (
        <div>
            <h2>Mangae Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name}</h4>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;
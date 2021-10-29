import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setService(data)
            })
    }, [2])
    return (
        <div>
            <h1>{service.name}</h1>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;
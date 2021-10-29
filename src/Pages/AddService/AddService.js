import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';
// const axios = require('axios');
const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Inserted Successfully!');
                    reset()
                }
            })
    };
    return (
        <div className="add-service">
            <h2>Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
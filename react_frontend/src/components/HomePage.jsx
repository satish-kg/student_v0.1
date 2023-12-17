import React, { Component } from 'react';
import ListStudent from './ListStudent';
import { useNavigate } from 'react-router-dom';

const HomePage = () =>{
    const navigate = useNavigate();
    const createStudent = () =>{
        navigate("/createStudent");
    }
    return(
        <div>
            <ListStudent />
            <div className="buttons">
                <button className="btn btn-primary" onClick={createStudent}>Add Student</button>
                {/* <button className="btn btn-primary">Edit</button>
                <button className="btn btn-primary">Delete</button> */}
            </div>
        </div>
    )
}

export default HomePage;
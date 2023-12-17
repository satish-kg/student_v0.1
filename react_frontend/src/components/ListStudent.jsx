import React, { Component, useState, useEffect } from 'react';
import StudentService from '../services/StudentService';



const ListStudent = () =>{
    const [students, setStudents] = useState([]);

    useEffect(() => {
        StudentService.getStudents().then((res) => {
            setStudents(res.data);
        });
    }, []);

    return (
        <div>
            <h1>Student List : </h1>
            <div className="row">
                <table className='table table-stripped table'>
                    <thead>
                        <tr>
                            <th>Student Id</th>
                            <th>Student Name</th>
                            <th>Student Birth Year</th>
                            <th>Student Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.birthYear}</td>
                                <td>{student.classNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListStudent;
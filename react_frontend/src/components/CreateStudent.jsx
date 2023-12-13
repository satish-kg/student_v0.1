import React, { useState, Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// class CreateStudent extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

const CreateStudent = () =>{
    const navigate = useNavigate();
    const endpoint = "http://localhost:8989/api/v1/student/create";

    const [id_, setId_] = useState("");
    const [name_, setName_] = useState("");
    const [birthYear_, setBirthYear_] = useState("");
    const [classNumber_, setClassNumber_] = useState("");

    const debouncedIdHandler = _.debounce((value) =>{
        setId_(value);
        console.log(value);
    })

    const deboundedNameHandler = _.debounce((value) =>{
        setName_(value);
        console.log(value);
    })

    const debouncedBirthYearHandler = _.debounce((value) =>{
        setBirthYear_(value);
        console.log(value);
    })

    const debouncedClassNumberHandler = _.debounce((value) =>{
        setClassNumber_(value);
        console.log(value);
    })

    const handleIdChange = (e) =>{
        const {value} = e.target;
        debouncedIdHandler(value);
    }

    const handleNameChange = (e) =>{
        const {value} = e.target;
        deboundedNameHandler(value);
    }

    const handleBirthYearChange = (e) =>{
        const {value} = e.target;
        debouncedBirthYearHandler(value);   
    }

    const handleClassNumberChange = (e) =>{
        const {value} = e.target;
        debouncedClassNumberHandler(value);
    }

    const saveStudent = (e) =>{
        e.preventDefault();
        const studentObj = { id : id_, name : name_, birthYear: birthYear_, classNumber: classNumber_ };
        // const studentObj = {
        //     id: id,
        //     name: name,
        //     birthYear: birthYear,
        //     classNumber: classNumber
        // };
        console.log("studenttttttttttttttttttt : "+ JSON.stringify(studentObj));
        sendStudentObject(studentObj);
    }

    const sendStudentObject = async(studentObj) =>{
        try{
            console.log("i tried");
            const response = await axios.post(`${endpoint}`, studentObj);
            console.log("Data send : ", response.data);
            navigate("/createStudent");
        }catch(error){
            console.log("Error : ", error);
        }
    }

    return (
        <div>
            <h1>Create Student</h1>
            <div className="container">
                <div className="card">
                    <form>
                        <div className="form-group">
                            <label htmlFor="id">Id: <br />
                                <input type="number" onChange={handleIdChange} name='id' value={id_}  />
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name: <br />
                                <input type="text" onChange={handleNameChange} name='name' value={name_} />
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthYear">Birth Year: <br />
                            <input type="number" onChange={handleBirthYearChange} name='birthYear' value={birthYear_} />
                            </label>                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="classNumber">Class : <br />
                            <input type="number" onChange={handleClassNumberChange} name='classNumber' value={classNumber_} />
                            </label>
                        </div>
                        <button type="submit" onClick={saveStudent}>Create</button>
                        <button type='button'>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateStudent;
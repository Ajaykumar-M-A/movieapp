import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {

    const [inputfield, changeInputfield] = useState(
        {

            "name": ""
        }
    )
    const[type,intype]=useState(
        [
            {"name":"",
            "image":"",
        "actor":"",
    "actress":"",
"producer":"",
"director":""}
        ]

    )

    const inputHandler = (event) => {
        changeInputfield({ ...inputfield, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(inputfield)
        axios.post("http://127.0.0.1:8000/movie/search/",inputfield).then(
            (response)=>{
                console.log(response.data);
                intype(response.data)
            }
        )

    }
    return (
        <div>
            <div className="container">
                <Navbar />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Movie Name</label>
                                <input type="text" className="form-control " name='name' value={inputfield.name} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <center> <button onClick={readValue} className="btn btn-danger">Delete</button></center>
                            </div>
                        </div>
                    </div>
                </div>
                {type.map(
                    (value,i)=>{
                        return <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    
                                <div  className="col">
                            <div className="card h-100">
                              <img src={value.image} style={{ height: '350px' }} className="card-img-top" alt={value.name} />
                              <div className="card-body">
                                <h5 className="card-title">{value.name}</h5>
                                <p className="card-text">Actor: {value.actor}</p>
                                <p className="card-text">Actress: {value.actress}</p>
                                <p className="card-text">Director: {value.director}</p>
                                <p className="card-text">Producer: {value.producer}</p>
                                
                              </div>
                            </div>
                          </div> 
    
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                )}
            </div>

        </div>
    )
}

export default Search
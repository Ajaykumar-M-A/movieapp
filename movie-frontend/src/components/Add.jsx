import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const AddMovie = () => {
  const [inputfield, changeInputfield] = useState({
    "name": "",
    "actor": "",
    "actress": "",
    "director": "",
    "producer": "",
    "image": "",
  });

  const inputHandler = (event) => {
    changeInputfield({ ...inputfield, [event.target.name]: event.target.value });
  };

  const readValue = () => {
    console.log(inputfield)
    axios.post("http://127.0.0.1:8000/movie/add/",inputfield).then(
      (response)=>{
        alert(response.data.status)
      }
    )
    
  };

  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Movie Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={inputfield.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                 Actor
                </label>
               <input type="text" className="form-control" name='actor' value={inputfield.actor} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Actress
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="actress"
                  value={inputfield.actress}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Director
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="director"
                  value={inputfield.director}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Producer
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="producer"
                  value={inputfield.producer}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Image
                </label>
               <input type="text" className="form-control" name='image' value={inputfield.image} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <center>
                  <button onClick={readValue} className="btn btn-success">
                    Add Movie
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;

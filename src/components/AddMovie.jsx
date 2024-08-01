import React from 'react'
import Navbar from './Navbar'


const AddMovie = () => {
  return (
    <div>
    <Navbar/>
        <div className="container">
        
           
            <div className="row">
                <div className="col col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    

                    <div className="row g-3">

                <div className="col col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Movie name</label>
                       <input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Language</label>
                <input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Director name</label>
                <input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label for="" class="form-label">Producer name</label>
                <input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Camera</label>
                <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label for="" class="form-label">Actor Name</label>
                <input type="text" className="form-control" />

                </div>



                <div className="col col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success">Submit</button>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>



  )
}

export default AddMovie
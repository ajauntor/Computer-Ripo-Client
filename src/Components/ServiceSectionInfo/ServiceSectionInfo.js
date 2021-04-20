import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSectionInfo = ({ service }) => {
    


    return (
        <div className="col-sm-12 col-md-6 col-lg-4  mt-5 d-flex justify-content-around">
            <div className="" style={{ width: '20rem' }}>
                <img src={service.imageURL} style={{ width: '20rem', height: '20rem' }} alt="" />
                <div className="card-body">
                    <h3 className="card-title text-center">{service.name}</h3>
                    <p className="card-text text-muted">{service.description}</p>
                    <div className="text-center">
                        <h5 className="card-title">Price: ${service.price}</h5>
                        <Link to={`/book/${service._id}`}><button className="btn btn-danger">Book Now</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceSectionInfo;
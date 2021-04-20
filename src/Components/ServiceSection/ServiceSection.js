import React, {  useContext, useEffect, useState } from 'react';
import { ServiceContext } from '../../App';


import ServiceSectionInfo from '../ServiceSectionInfo/ServiceSectionInfo';



const ServiceSection = () => {

    const { service, setService } = useContext(ServiceContext)
//    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('add your apiservices')
        .then(res => res.json())
        .then(data => setService(data))
    },[setService])

// const handleAddProduct = (service)=>{
//    const newCart = [...cart, service];
//    setCart(newCart);
//    console.log(service)

// }


    return (
        <div className="container">
            <div className="text-center mt-5">
                <h1>We Provide Best Services</h1>
                
               <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet<br/> commodi mollitia ducimus odit, dolor doloribus.</p>
            </div>
            <div className="row d-flex justify-content-center mt-5">
               
                {
                    service.map(service => <ServiceSectionInfo service={service}  key={service._id}   ></ServiceSectionInfo>)
                }
                
                
            </div>
        </div>
    );
};

export default ServiceSection;
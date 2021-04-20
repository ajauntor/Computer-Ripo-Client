import React, { useEffect, useState } from 'react';


const ManagProduct = () => {

    const [service, setService] = useState([])

    useEffect(()=>{
        fetch('add your apiservices')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    

    const deleteItem = id =>{
        fetch(`add your apideleteItem/${id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(result=>{
            console.log('deleted successfully',result)
        })
    }

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-2"></div>
           <div className="col-md-10">
           <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Delete</th>
               
               
                </tr>
            </thead>
            <tbody>
                {
                  service.map((service, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{service.name}</td>
                        <td>${service.price}</td>
                        <td><button onClick={()=>deleteItem(service._id)}>Delate</button></td>
                        
                    </tr>
                    )
                }
            </tbody>
        </table>
           </div>
           </div>
        </div>
    );
};

export default ManagProduct;
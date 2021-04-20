import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = data => {
    const serviceData = {
      name: data.name,
      price: data.price,
      description: data.description,
      imageURL: imageURL
    }

    const url = `add your apiaddService`
    console.log(serviceData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceData)
    })
      .then(res => console.log('server site respons', res))
  };


  //image upload
  const handleImageUpload = event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', ' add your imggbb key ');
    imageData.append('image', event.target.files[0])


    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-lg-10 col-md-12 col-sm-12">
            <h3>Add Your Service</h3>

            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="mb-3">
                <label className="form-label">Service Name</label>
                <input name="name" className="form-control" placeholder=" Name" type="text" {...register("name")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Service price</label>
                <input name="price" className="form-control" placeholder="Price" type="number" {...register("price")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea name="description" className="form-control" id="" cols="10" rows="10" placeholder="Description *" {...register("description")}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Import Image</label>
                <input name="exampleRequired" className="form-control" type="file" onChange={handleImageUpload} />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AddService;
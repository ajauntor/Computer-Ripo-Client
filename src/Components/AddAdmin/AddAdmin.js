import React from 'react';
import { useForm } from 'react-hook-form';

const AddAdmin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    const serviceData = {
      name: data.name,
      email: data.email,
     
    }

    const url = `add your apiaddAdmin`
    console.log(serviceData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceData)
    })
      .then(res => console.log('admin added', res))
  };


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-lg-10 col-md-12 col-sm-12">
                        <h3>Add Admin</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="mb-3">
                                <label className="form-label"> Name</label>
                                <input name="name" className="form-control" placeholder=" Name" type="text" {...register("name")} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email </label>
                                <input name="email" className="form-control" placeholder="Email" type="text" {...register("email")} />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddAdmin;
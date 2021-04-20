import React, { useContext, useEffect, useState } from 'react';
import './Book.css'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { ServiceContext, UserContext } from '../../App';
import { Elements,CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProcessPayment from '../ProcessPayment/ProcessPayment';


const stripePromise = loadStripe('pk_test_51IeLjoI5OhQvnkPZt9sDcLvjBJh8FEiuXPrqHFWfuJYnN6ZYqiv7CHLMv7U9LLRjElbOvFnuYbCU1EWBujKEJfJb00unLUrfJE');


const Book = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { service, setService } = useContext(ServiceContext)

    const { id } = useParams()
    const particularItem = service.find(item => item._id == id)



    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [shippingData, setShippingData] = useState(null);
    const onSubmit = data => {
        setShippingData(data);
        
        
    };

    const handlePaymentSuccess = paymentId =>{
        const orderDetails = {
            ...loggedInUser, 
            ...particularItem,
             booking: shippingData,
             paymentId,
             orderTime: new Date()

            };

        fetch('add your apiaddOrder',{
            method : "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('your order placed successfully');
            }
        })

    }


    return (
        <div >

            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div style={{display: shippingData ? 'none':'block'}} className="col-md-5 col-lg-5 col-sm-12">
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <input name="name" defaultValue={loggedInUser.name} {...register("name")} placeholder="Enter your name" required/>
                            {errors.name && <span className="error">name is required</span>}

                            <input name="email" defaultValue={loggedInUser.email} {...register("email")} placeholder="Enter your email" required/>
                            {errors.email && <span className="error">email is required</span>}

                            <input name="address" {...register("address")} placeholder="Enter your Adderss" required/>
                            {errors.address && <span className="error">address is required</span>}

                            <input name="phone" {...register("phone")} placeholder="Enter your phone" required/>
                            {errors.phone && <span className="error">phone is required</span>}

                            

                            <button className="buttonStyle" type="submit" >submit </button>
                        </form>
                        
                        
                    </div>
                    <div style={{display: shippingData ? 'block':'none'}} className="col-md-5 col-lg-5 col-sm-12 mt-5">
                      
                            <h4>Pay with Stripe</h4>
                            <p>your total Amount ${particularItem?.price}</p>
                                <Elements stripe={stripePromise}>                              
                                        <ProcessPayment handlePayment={handlePaymentSuccess}/> 
                                                    
                                </Elements>
                            
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Book;
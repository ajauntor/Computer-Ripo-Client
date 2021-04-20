import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const CounterSection = () => {
    return (
        <section className="mt5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 mt-5 pt-5">
                        <h1>Our service<br /> is world class</h1>
                        <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero explicabo voluptatem facere impedit, et laudantium reprehenderit minus illum iusto ipsum! Cum magnam aut ducimus vel laboriosam doloremque ratione deserunt recusandae.</p>

                        <div style={{fontSize:'30px',fontWeight:'bold'}} className="d-flex mt-4">
                            <div  className="mr-5">
                                <img style={{height:'70px'}} src="https://www.flaticon.com/svg/vstatic/svg/1802/1802913.svg?token=exp=1618934793~hmac=760f433c8113b96ff6f777204fbcccf5" alt=""/><br/>
                                <CountUp delay={6} end={156} />
                                </div>
                            <div className="mr-5">
                                <img style={{height:'70px'}} src="https://www.flaticon.com/svg/vstatic/svg/4342/4342926.svg?token=exp=1618935681~hmac=a19d1c30329f7a4947b9a232ac2d85a0" alt=""/><br/>
                                <CountUp delay={5} end={211 } />
                                </div>
                            <div className="mr-5">
                                <img style={{height:'70px'}} src="https://squeakymouse.com/wp-content/uploads/2020/04/Computer-Mouse-Icon-300x300.png" alt=""/><br/>
                                <CountUp delay={7} end={45} />
                                </div>
                            
                        </div>

                        <Link style={{ textDecoration: 'none' }} className="button-Style mt-4" to='/contact'>Contact Us</Link>
                    </div>
                    <div style={{paddingTop:"100px"}} className="col-sm-12 col-md-6 col-lg-6">
                        <img className='img-fluid' src="https://images.unsplash.com/photo-1513366884929-f0b3bedfb653?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CounterSection;
import React from 'react';
import { Link } from 'react-router-dom';


const AboutSection = () => {
    return (
        <section className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img className='img-fluid' src="https://tinyurl.com/2wnfhc22" alt="" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mt-5 pt-5">
                        <h1> Client satisfaction<br/> 
                    is our final goal
                         </h1>
                        <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Vero explicabo voluptatem facere impedit, et laudantium reprehenderit 
                         minus illum iusto ipsum! Cum magnam aut ducimus vel laboriosam doloremque 
                         ratione deserunt recusandae.</p>
                        <Link style={{ textDecoration: 'none' }} className="button-Style mt-4 " to='/about'>About Us</Link>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
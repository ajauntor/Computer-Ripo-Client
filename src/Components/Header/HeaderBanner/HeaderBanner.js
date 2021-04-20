import React from 'react';
import './HeaderBanner.css'
import computer from '../../../images/computer.png'

const HeaderBanner = () => {
    return (
        <div className="hederBanner">
            <div className="container">
                <div className="row mt-5 d-flex justify-content-around">
                <div className="col-md-6">

                    <h1  style={{fontSize:'55px',color:'white'}}>Get touch <br/> from professional</h1>
                   
                    <p className="text-white pt-3">Lorem ipsum dolor sit amet, consectetur
                     adipisicing elit. Mollitia laudantium alias animi rem dolores sed id
                      sequi nihil.</p>
                   
                    <button type="button" style={{backgroundColor:'white',borderRadius:'30px'}} class="btn mt-3">Contact Us</button>
                </div>
                <div className="col-md-6">
                    <img  className="d-none computer-style  d-lg-block" src={computer} alt=""/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;
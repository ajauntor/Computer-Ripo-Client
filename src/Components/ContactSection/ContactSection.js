import React from 'react';
import './ContactSection.css'

const ContactSection = () => {
    return (
        <section style={{marginTop:'180px'}}>
        <div  className="contact my-5 mt-5 pt-5 py-5">
            <div  className="container">
               
               <div className="section-header text-center text-white mb-5">
                    <h5 className="">Contact</h5>
                    <h1 style={{fontSize:"45px"}}>Get in Touch with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email *" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Issue *" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="  Write Details *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-primary"> Submit </button>
                        </div>
                    </form>
                </div>
               </div>
            </div>
        </section>
    
    );
};

export default ContactSection;
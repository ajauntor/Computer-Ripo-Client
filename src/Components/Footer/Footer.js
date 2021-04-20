import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <div style={{marginTop:'100px'}}>
            <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
                <MDBContainer className="text-center text-md-left">
                    <MDBRow className="text-center text-md-left mt-3 pb-3">
                        <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Our details
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rem laboriosam 
                                corporis enim ipsam error alias harum iste. Eveniet, recusandae a.
                            </p>
                        </MDBCol>
                        <hr className="w-100 clearfix d-md-none" />
                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Our Services</h6>
                            <p>
                                <a href="#!">Leptop repair</a>
                            </p>
                            <p>
                                <a href="#!">CPU repair</a>
                            </p>
                            <p>
                                <a href="#!">Monitor repair</a>
                            </p>
                            <p>
                                <a href="#!">Keyboard repair</a>
                            </p>
                        </MDBCol>
                        <hr className="w-100 clearfix d-md-none" />
                        <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Quick links
                             </h6>
                            <p>
                                <a href="#!">About Us</a>
                            </p>
                            <p>
                                <a href="#!">Privacy Policy</a>
                            </p>
                            <p>
                                <a href="#!">Terms of Service</a>
                            </p>
                            <p>
                                <a href="#!">Help</a>
                            </p>
                        </MDBCol>
                        <hr className="w-100 clearfix d-md-none" />
                        <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p>
                                <i className="fa fa-home mr-3" /> Chicago,pro box- 4580, USA
                             </p>
                            <p>
                                <i className="fa fa-envelope mr-3" /> info.compripo@get.com
                            </p>
                            <p>
                                <i className="fa fa-phone mr-3" /> + 04 545 277 00
                             </p>
                            <p>
                                <i className="fa fa-print mr-3" /> + 04 545 277 01
                             </p>
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow className="d-flex align-items-center">
                        <MDBCol md="8" lg="8">
                            <p className="text-center text-md-left grey-text">
                                &copy; {new Date().getFullYear()} Copyright:{" "}
                                All Rights Reserved
                            </p>
                        </MDBCol>
                        <MDBCol md="4" lg="4" className="ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-google-plus" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-google-plus
                                            fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBFooter>
        </div>
    );
};

export default Footer;
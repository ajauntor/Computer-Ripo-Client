import React, { useEffect, useState } from 'react';
import RevewSectionInfo from '../RevewSectionInfo/RevewSectionInfo';
import './RevewSection.css'


const RevewSection = () => {

    const [review, setReview] = useState([])

    useEffect(()=>{
        fetch('add your apireviews')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])

    return (

        <section style={{marginTop:'180px'}}>
            <div className="review my-5 py-5 mt-5 pt-5">
            <div className="container">
                <div className="section-header">                   
                    <h1 className="text-center">What Our Client  Said </h1>
                </div>
                <div className="card-deck mt-5">

                    {
                        review.map(review => <RevewSectionInfo review={review} key={review.name} />)
                    }
                </div>
            </div>
        </div>
        </section>

    );
};

export default RevewSection;
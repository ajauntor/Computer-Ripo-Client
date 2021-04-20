import React from 'react';

const ManagProductInfo = ({service}) => {
    return (
        <section>
            <div className="col-2"></div>
            <div className="col-md-10 col-lg-10 col-sm-12">
                <h4>{service.name}</h4>
            </div>
        </section>
    );
};

export default ManagProductInfo;
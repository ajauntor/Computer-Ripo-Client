import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Sidebar.css';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('add your apiisAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div>
            <div class="sidebar">
            
                { isAdmin && <div>
                <Link to="/dashboard/manage">Manage Product</Link>
                <Link to="/dashboard/addService">Add Service</Link>               
                <Link to="/dashboard/addAdmin">Add Admin</Link>
                </div>}

                <Link to="/dashboard/addReview">Review</Link>
                <Link to="/dashboard/order">Order List</Link>
                
                
               
                
            </div>

           
        </div>
    );
};

export default Sidebar;
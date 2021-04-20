import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddAdmin from '../AddAdmin/AddAdmin';
import AddReview from '../AddReview/AddReview';
import AddService from '../AddService/AddService';
import Book from '../Book/Book';
import Home from '../Home/Home';
import ManagProduct from '../ManagProduct/ManagProduct';
import OrderList from '../OrderList/OrderList';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {
    return (

        <Router>
            <Sidebar />
            
            <Switch>
                <Route path ='/book/:id'>
                    <Book/>
                </Route>
                <Route path='/dashboard/order'>
                    <OrderList/>
                </Route>
                <Route path='/dashboard/addAdmin'>
                    <AddAdmin/>
                </Route>
                <Route path='/dashboard/addService'>
                    <AddService />
                </Route>
                <Route path='/dashboard/addReview'>
                    <AddReview />
                </Route>
                <Route path='/dashboard/manage'>
                    <ManagProduct />
                </Route>
                <Route exact path='/'>
                <ManagProduct />
                </Route>
            </Switch>

        </Router>
    );
};

export default DashBoard;
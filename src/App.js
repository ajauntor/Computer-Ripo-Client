import React, {  createContext, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import DashBoard from './Components/DashBoard/DashBoard';
import AddService from './Components/AddService/AddService';
import AddReview from './Components/AddReview/AddReview';
import ManagProduct from './Components/ManagProduct/ManagProduct';
import Book from './Components/Book/Book';
import Login from './Components/Login/Login';
import PrivetRout from './Components/PrivetRout/PrivetRout';
import OrderList from './Components/OrderList/OrderList';
import AddAdmin from './Components/AddAdmin/AddAdmin';


export const UserContext = createContext()
export const ServiceContext = createContext();

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({})
  const [service, setService] = useState([]);


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <ServiceContext.Provider value={{service, setService}}>
    <Router>
      <Switch>
       <Route path ='/home'>
         <Home/>
       </Route>
       <Route path="/login">
          <Login/>
        </Route>
       <PrivetRout path='/book/:id'>
         <DashBoard/>
       </PrivetRout>
        <PrivetRout path='/dashboard'>
          <DashBoard/>
        </PrivetRout>
        <PrivetRout path ='/dashboard/addService'>
          <AddService/>
        </PrivetRout>
        <PrivetRout path='/dashboard/addReview'>
          <AddReview/>
        </PrivetRout>
        <PrivetRout path ='/dashboard/manage'>
          <ManagProduct/>
        </PrivetRout>
        <PrivetRout path='/dashboard/order'>
          <OrderList/>
         </PrivetRout>
         <Route path='/dashboard/addAdmin'>
            <AddAdmin/>
           </Route>
        <Route exact path="/">
        <Home/>
        </Route>
      </Switch>
    </Router>
    </ServiceContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
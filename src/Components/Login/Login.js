import firebase from "firebase/app";
import "firebase/auth";

import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import firebaseConfig from "../../firebase.config";


if (firebase.apps.length === 0){

  firebase.initializeApp(firebaseConfig);
}




function Login() {
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })
  

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
       
        setUserToken()
        setUser(signedInUser)
        setLoggedInUser(signedInUser)
        history.replace(from);
        console.log(displayName, photoURL, email)
      })
      .catch(err => {
        console.log(err)
        console.log(err.message)
      })

  }

  const setUserToken = () =>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        sessionStorage.setItem('token',idToken);
      }).catch(function(error) {
        // Handle error
      });
      
  }
  
  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: '',
          error: '',
          success: false
        }
        setUser(signOutUser);
      })
      .catch(err => {

      })
  }
  const handleBlur = (event) => {
    let isFormValid = true;
    if (event.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);

    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value)
      isFormValid = isPasswordValid && passwordHasNumber
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo)
    }
  }
  const handleSubmit = (e) => {

    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo)
          
          updateUserName(user.name)
          console.log(res)
        })
        .catch(error => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);

        });
    }

    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo)
          setLoggedInUser(newUserInfo) 
          history.replace(from);

        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  }
  const updateUserName = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
      
    }).then(function () {
      // Update successful.
    }).catch(function (error) {
      // An error happened.
    });

  }

  return (
    <div className=" row justify-content-center">
      <div className="col-lg-4 col-md-4 col-sm-4">
      <h1>Sign In</h1><br/>
      
      <br />
      <Form  onSubmit={handleSubmit}>
        
       <div className="mb-3">
       {newUser && <input type="text" name="name" onBlur={handleBlur} className="form-control" placeholder="your name" required />}
       </div>
        <div className="mb-3">
        <input type="text" className="form-control" name="email" onBlur={handleBlur} className="form-control" placeholder="Enter your email" required />
        </div>
       <div className="mb-3">
       <input type="password" className="form-control" name="password" onBlur={handleBlur} className="form-control" placeholder="your password" required />
       </div>
        <input type="submit" value="Submit" value={newUser ? 'Sign Up': 'Sign In'} /><br/><br/>

        {
        user.isSignedIn ? <button onClick={handleSignOut}>Sign Out</button> :
          <button onClick={handleSignIn}>Continue with Google</button>
      }
      <br/>
      
      
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
      <label htmlFor="newUser">New user sign up</label>

      </Form>
      <p style={{ color: 'red' }}>{user.error}</p>
      {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} Successfully</p>}
      </div>
    </div>
  );
}

export default Login;
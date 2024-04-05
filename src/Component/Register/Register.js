import React, {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "./Register.css";


function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    const signupsuccess = () => toast.success('Signup Successfully...', {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "colored",
     });

     const signupunsuccess = () => toast.error("Email already register, please login", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      })
 
    const post = async(e) => {
     e.preventDefault();
 
     try {
         const posts = await axios.post(`https://intern-project-backend-nine.vercel.app/signup`, 
         {username, email, password});
          
         if(posts.status === 201){
          signupsuccess() 
           setTimeout(() => {
             window.location.href="/signin"
           },5000)
         }
       return posts;
       } catch (error) {
        signupunsuccess();    
     }
    }

  return (
    <section className="vh-90" id="aaa">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100" >
        <div className="col-md-9 col-lg-6 col-xl-5">
        <h2 id="aoo-">Intern</h2>
          <h3 id="aoos">Project</h3>
          <h3 id="aooss">Page</h3>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={post}>
          <h3 id="asxa">Project Signup</h3>

          <div className="form-outline mb-4">
              <input type="text" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter a valid username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
              <label className="form-label" for="form3Example3">username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter a valid email address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              <label className="form-label" for="form3Example3">Email address</label>
            </div>

            <div className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg"
                placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              <label className="form-label" for="form3Example4">Password</label>
            </div>
  
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="submit" id="azz"  className="btn btn-lg" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="/signin"
                  className="link-danger">Login</a></p>
            </div>
          </form>
          <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Register;
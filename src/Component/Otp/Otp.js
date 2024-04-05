import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Otp() {

    const [otpe, setOtpe] = useState("");

    const [otps, setOtps] = useState({});

    const [value, setValue] = useState("");
 
    let {id} = useParams();

    const notify = () => toast.success('Verified Successfully...', {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "colored",
     });

     const otpunsuccess = (data) => toast.error(data, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });


      useEffect(() => {
        fetch(`https://intern-project-backend-nine.vercel.app/getotp/${id}`)
        .then((res) => res.json())
        .then((one) => setOtps(one))
      },[id])


      useEffect(() => {
        setValue(otps.otp)
      },[otps.otp])
    
      
   

  

 const check = async(e) => {
    
  e.preventDefault()

    if(value.toString() === otpe.toString()){
     
         notify();
         setTimeout(() => {
          window.location.href=`/profile`;
        },5000)
        
          }else{
            otpunsuccess("OTP Does Not Match")
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
          <form >
          <h3 id="asxa">OTP Integration</h3>
            <div className="form-outline mb-4">
              <input type="text" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter OTP" value={otpe} onChange={(e) => setOtpe(e.target.value)}  required/>
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
              <button  id="azz" onClick={check}   className="btn btn-lg" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>OTP</button>
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

export default Otp;
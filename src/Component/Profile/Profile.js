import react from "react";
import { useState, useEffect } from "react";
import "./Profile.css";


const Profile = () => {

     const [userData, setUserData] = useState('');

     const id = localStorage.getItem("id");

     useEffect(() => {
        fetch(`https://intern-project-backend-nine.vercel.app/getuser/${id}`)
        .then((res) => res.json())
        .then((data) => setUserData(data));
     },[id]);


     console.log(userData);

     const logout = () => {
        localStorage.removeItem("id");
        localStorage.removeItem("username");
        window.location.href="/";
     }


    return (
        <div className="data">
            <div className="card">
            <h6>Username: {userData.username}</h6>
            <h6>Email: {userData.email}</h6>
            <h6>Verified</h6>
            <button onClick={logout} className="logout">Logout</button>
           </div>
        </div>
    )
}

export default Profile;
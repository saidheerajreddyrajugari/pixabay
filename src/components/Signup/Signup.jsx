import React, { useState } from "react";
import "../Styling/Style.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    const [confirmPassword, setConfPass] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        localStorage.setItem("email", email);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Sign-up successful!");

        navigate("/"); // Redirect to login after signup
    };

    return (
        <div id="contain1">
            <div className="container2">
                <form className="signup" onSubmit={handleSubmit}>
                    <h2>Sign-Up</h2>
                    <div className="form-group2">
                        <label htmlFor="name">User-Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Enter your name"
                            value={username}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
                    <div className="form-group2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </div>
                    <div className="form-group2">
                        <label htmlFor="confirmPassword">Confirm-Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            required
                            placeholder="Confirm your Password"
                            value={confirmPassword}
                            onChange={(e) => setConfPass(e.target.value)}
                        />
                    </div>
                    <div className="form-group2">
                        <button type="submit">Register</button>
                    </div>
                    <Link to="/">
                        <p>Existing User? Login</p>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;














// import React from "react";
// import "../Styling/Style.css"
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Signup = () => {
//     const [email, setEmail] = useState("");
//     const [username, setUser] = useState("");
//     const [password, setPass] = useState("");
//     const [confirmPassword, setConfPass] = useState("");


//     const Submit = (e) => {
//         if (password !== confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }
//         localStorage.setItem("email", email);
//         localStorage.setItem("username", username);
//         localStorage.setItem("password", password);

//         alert("Sign-up successful! Data stored in localStorage.");
//     };
//     return (
//         <div id="contain1">
//             <div className="container2">  
//                 <form className="signup">  
//                     <h2>Sign-Up</h2>  
//                     <div className="form-group2">  
//                         <label htmlFor="name">User-Name</label>  
//                         <input type="text" id="name" name="name" required placeholder="Enter your name" value={username} onChange={(e) => setUser(e.target.value)}/>  
//                     </div>  
//                     <div className="form-group2">  
//                         <label htmlFor="email">Email</label>  
//                         <input type="email" id="email" name="email" required placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>  
//                     </div> 
//                     <div className="form-group2">  
//                         <label htmlFor="password">Password</label>  
//                         <input type="password" id="password" name="password" required placeholder="Enter your Password" value={password} onChange={(e) => setPass(e.target.value)}/>  
//                     </div>  
//                     <div className="form-group2">  
//                         <label htmlFor="password">Confirm-Password</label>  
//                         <input type="password" id="password" name="password" required placeholder="Confirm your Password" value={confirmPassword} onChange={(e) => setConfPass(e.target.value)}/>  
//                     </div>  
//                     <div className="form-group2">  
//                         <button type="submit" onClick={Submit}>Register</button>  
//                     </div>  
//                    <Link to="/">
//                    <p>Existing User?Login</p> 
//                    </Link> 
//                 </form>  
//             </div>  
//             </div>
//     );
// };

// export default Signup;
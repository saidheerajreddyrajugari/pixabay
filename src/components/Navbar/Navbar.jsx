import React from "react";
import '../Styling/Style.css'
export default class Nav1 extends React.Component{
    render(){
        return(
            <>

           <nav>
                <div className="logo"><h1 id="logo">PIXABAY</h1></div>
                <div id="items"> 
                    <ul>
                        <li>Home</li>
                        <li>Profile</li>
                        <li><button id="loginbtn">Login</button></li>
                    </ul>

                </div>
            </nav>
            </>
            )
        }
}
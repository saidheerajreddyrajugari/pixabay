import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Fetch from "./components/Pixabay/Pixabay";

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/pixabay" element={<Fetch />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}



// import React from "react";
// import Fetch from "./components/Pixabay/Pixabay";
// import { BrowserRouter, Route,Routes } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// export default class App extends React.Component{
//   render(){
//     return(
//       <>
//    <BrowserRouter>
//    <Routes>
//     <Route path="/" element={<Login></Login>}/>
//     <Route path="/signup" element={<Signup></Signup>}/>
//     <Route path="/pixabay" element={<Fetch></Fetch>}></Route>
//    </Routes>
//    </BrowserRouter>
//    <Fetch/>
//       </>
//     )
//   }

// }
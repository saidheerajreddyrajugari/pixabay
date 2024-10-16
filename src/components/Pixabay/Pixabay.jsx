// import React, { useEffect, useState } from "react";
// import "../Styling/Style.css";
// import Nav1 from "../Navbar/Navbar";

// const Fetch = () => {
//     const [api, setApi] = useState([]);
//     const [search, setSearch] = useState("");

//     useEffect(() => {
//         if (search) {
//             fetch(`https://pixabay.com/api/?key=46193686-86bb1056285a2ce0ece3e83ba&q=${search}&image_type=photo`)
//                 .then((res) => res.json())
//                 .then((val) => setApi(val.hits));
//         }
//     }, [search]);

//     return (
//         <>
//             <Nav1 />
//             <div className="body-container">
//                 <div id="searchdiv">
//                     <input
//                         className="input"
//                         type="text"
//                         placeholder="Search For Images"
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                 </div>
//             </div>
//             <div className="image-container">
//                 {api.map((x) => (
//                     <img key={x.id} id="fetchimg" src={x.webformatURL} alt={x.tags} />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Fetch;









import React, { useEffect, useState } from "react";
import "../Styling/Style.css"
import Nav1 from "../Navbar/Navbar";
const Fetch=()=>{
let [api,setApi]=useState([])
let [search,setSearch]=useState([])
useEffect(()=>{
    let api =fetch(`https://pixabay.com/api/?key=46193686-86bb1056285a2ce0ece3e83ba&q=${search}&image_type=photo`)
    api.then(res=>res.json()).then(val=>
        setApi(val.hits)
    )
})
return(
   <>
   <Nav1/>
    <div className="body-container">
        <div id="searchdiv">
        <input className="input" type="text" placeholder="Search For Images" onChange={e=>setSearch(e.target.value)}/>
        </div>
        </div>
        <div style={{display:"flex", flexWrap:"wrap"}}>
       {api.map((x,i)=>(
        <div  key={i} > 
        <img id="fetchimg" src={x.webformatURL} alt={x.tags} />
        </div>
           
        ))}
        </div>
   </>
)
}
export default Fetch

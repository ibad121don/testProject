import React from "react";
import ReactDOM from "react-dom";
import Login from "./pages/login/login";
import "./index.css";
ReactDOM.render(
  <>
    <form>
    <label>
      email
    </label>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <label>
        password
      </label>
      <input placeholder="enter password"/>
    </form>
  </>,
  document.getElementById("root")
);

// import Signup from "./pages/signup/signup";
// import Login from "./pages/login/login";

// const Main=()=>{
//   let [screen,setScreen]=useState(0)
//   return(
//    <div>
//     {screen==0?
//    <Signup  setScreen={setScreen} />
//    :
//    <Login setScreen={setScreen}/>
//     }
//    </div>
//   )
// }
// ReactDOM.render(
//   <>

// <Main/>

//   </>,

//   document.getElementById("root")
// );

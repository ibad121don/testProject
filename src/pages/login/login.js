// //import liraries
import React, { useEffect, useState } from "react";
import Btn from "../../assets/compnents/btn/btn";

// create a component
const Login = ({ setScreen }) => {
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(0);

  let data = [
    { id: 1, name: "hamd", age: 15, class: "9th", Rno: 1 },
    { id: 2, name: "hamd", age: 15, class: "9th", Rno: 1 },
    { id: 3, name: "maher", age: 15, class: "9th", Rno: 1 },
    { id: 4, name: "sad", age: 15, class: "9th", Rno: 1 },
    { id: 5, name: "hamd", age: 15, class: "9th", Rno: 1 },
    { id: 6, name: "hamd", age: 15, class: "9th", Rno: 1 },
    { id: 7, name: "hamd", age: 15, class: "9th", Rno: 1 },
    { id: 8, name: "hamd", age: 15, class: "9th", Rno: 1 },
    { id: 9, name: "hamd", age: 15, class: "9th", Rno: 1 },
  ];
  return (
    <div>
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Reg</th>
        </tr>
        {data.map((e) => {
          return (
            <tr style={{backgroundColor:e.id%2==0?'green':'white'}}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.Rno}</td>
            </tr>
          );
        })}
      </table>
      <h1>{count}</h1>
      <Btn style={{backgroundColor:check==1?'green':'white'}}
        press={() => {
          let r = count + 1;
          setCount(r);
          if(check==0)
          {
            setCheck(1)
          }else{
            setCheck(0)
          }
        }}
        title="Sign up"
      />
    </div>
  );
};

// //make this component available to the app
export default Login;

// import React from "react";
// import "./style.css";
// const Login = () => {
//   return (
//     <div className="parrent">
//       <div className="child"></div>
//     </div>
//   );
// };






// export default Login;

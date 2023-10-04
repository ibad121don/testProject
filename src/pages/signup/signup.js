//import liraries
import React   from 'react';
 import './style.css'
import Btn from '../../assets/compnents/btn/btn';

// create a component
const Signup = (  {setScreen}) => {
    return (
      <div >
       <Btn press={()=>setScreen(1)} title='Login'/>
      </div>
    );
};

// define your styles

//make this component available to the app
export default Signup;

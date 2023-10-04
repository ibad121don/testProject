//import liraries
import React   from 'react';
 

// create a component
const Btn = ({title="yes",press,style={}}) => {
    return (
    <div style={style}>
        <button onClick={()=>{
press()
        }}>
{title}
</button>
    </div>
    );
};

// define your styles

//make this component available to the app
export default Btn;

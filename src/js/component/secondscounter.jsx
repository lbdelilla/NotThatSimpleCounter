import propTypes from "prop-types";
import React from "react";

const SecondCounter = (props) => {
    
    let arr = Number(props.seconds);
    console.log(typeof(arr));
    
     
    return (
        <div className="counter container text-center">
            <p> {arr} </p>
        </div>
    );
    
};

SecondCounter.propTypes = {
    seconds: propTypes.number
}

export default SecondCounter;
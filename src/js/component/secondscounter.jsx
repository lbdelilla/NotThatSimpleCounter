import propTypes from "prop-types";
import React from "react";

const SecondCounter = (props) => {
    
    
     
    return (
        <div className="counter container text-center">
            <p> {props.seconds} </p>
        </div>
    );
    
};

SecondCounter.propTypes = {
    seconds: propTypes.number
}

export default SecondCounter;
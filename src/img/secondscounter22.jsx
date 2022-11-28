import React from "react";




const SecondsCounter = (props) => {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let days = 0;
    
    
    if(seconds === 60) {
        minutes++;
        seconds = 0;
    };    
    if(minutes === 60){
        hours++;
        minutes = 0
    };
    if(hours === 24){
        days++;
        hours = 0; 
    }
    
    return ( 
    <div className="counter">
        <div> reloj</div>
        <div> 
            {props.days}          
            {props.hours}
            {props.minutes}
            {props.seconds}       
        </div>
    </div>
    );
};

export default SecondsCounter;

import React from "react";

const SecondCounter = (props) => {
    
    let arr = Array.from(String(props.seconds), Number)
    console.log(arr[arr.length-1]);
    
     
    return (
        <div className="counter container text-center">
            <div className="myCard">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="watch bi bi-stopwatch-fill" viewBox="0 0 16 16">
                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"/>
                </svg>
                <p className="title">Seconds Counter</p>
            </div>
            <div className="container text-center">
                <div className="row row-cols-3 row-cols-lg-6 g-1 g-lg-4">
                    <div className="col">
                        <div className="container p-3 border">
                            <span>{arr.length > 5 ? arr[arr.length - 6] : 0}</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container p-3 border">
                            <span>{arr.length > 4 ? arr[arr.length - 5] : 0}</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container p-3 border ">
                        <span>{arr.length > 3 ? arr[arr.length - 4] : 0} </span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container p-3 border">
                            <span>{arr.length > 2 ? arr[arr.length - 3] : 0} </span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container p-3 border ">
                            <span>{arr.length > 1 ? arr[arr.length - 2] : 0} </span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container p-3 border">
                            <span>{arr[arr.length-1]} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
};




export default SecondCounter;
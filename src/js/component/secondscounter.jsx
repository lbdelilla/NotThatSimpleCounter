
import React from "react";

const SecondCounter = (props) => {
    
    let arr = Array.from(String(props.seconds), Number)
    console.log(arr[arr.length-1]);
    
     
    return (
        <div className="counter">
            <div className="myCard container-fluid">
                <i className=" clock fa-regular fa-clock"></i>
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
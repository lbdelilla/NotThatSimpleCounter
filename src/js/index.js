//import react into the bundle
import { array } from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondCounter from "./component/secondscounter.jsx";

let counter = 0
setInterval (() => {
    ReactDOM.render(<SecondCounter  seconds={counter}/>, document.querySelector("#app"));
    counter++;

    }, 1000);

//render your react application


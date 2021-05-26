import React from "react";
import GoodTimes from "../../images/GoodTimes.jpg";
import "./goodTimes.scss";

const GoodTimesCom = ()=>{
    return(
        <div className="OurWork">
            <div className="container-fluid">
                <h2 className="OurWork-h2">Good Times</h2>
                <div className="line">

                </div>
                <img className="OurWorkImg" src={GoodTimes} alt="Photo"/>
            </div>
        </div>
    )
}

export default GoodTimesCom;
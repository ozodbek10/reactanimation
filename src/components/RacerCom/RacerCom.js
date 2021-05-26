import React from "react";
import Racer from "../../images/Racer.jpg";
import "./racerCom.scss";

const RacerCom = ()=>{
    return(
        <div className="OurWork">
            <div className="container-fluid">
                <h2 className="OurWork-h2">The Racer</h2>
                <div className="line">

                </div>
                <img className="OurWorkImg" src={Racer} alt="Photo"/>
            </div>
        </div>
    )
}

export default RacerCom;
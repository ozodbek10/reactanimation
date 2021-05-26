import React from "react";
import Athlet from "../../images/Athlet.jpg";
import "./athletCom.scss";


const AthleteCom = ()=>{
    return(
        <div className="OurWork">
            <div className="container-fluid">
                <h2 className="OurWork-h2">The Athlete</h2>
                <div className="line">

                </div>
                <img className="OurWorkImg" src={Athlet} alt="Photo"/>
            </div>
        </div>
    )
}

export default AthleteCom;
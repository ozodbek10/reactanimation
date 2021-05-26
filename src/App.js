import React from "react";
import NavbarCom from "./components/NavbarCom/NavbarCom";
import WeWorkCom from "./components/WeWorkCom/WeWorkCom";
import HighQualityCom from "./components/HighQualityCom/HighQualityCom";
import AcardionCom from "./components/AcardionCom/AcardionCom";
import AthleteCom from "./components/AthleteCom/AthleteCom";
import RacerCom from "./components/RacerCom/RacerCom";
import GoodTimesCom from "./components/GoodTimesCom/GoodTimesCom";
import ContactUsCom from "./components/ContactUsCom/ContactUsCom.js";
import {Route, Switch} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <NavbarCom/>
            <Switch>
                <Route exact path="/">
                    <WeWorkCom/>
                    <HighQualityCom/>
                    <AcardionCom/>
                </Route>
                <Route path="/OurWork">
                    <AthleteCom/>
                    <RacerCom/>
                    <GoodTimesCom/>
                </Route>
                <Route path="ContactUs">
                    <ContactUsCom/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;

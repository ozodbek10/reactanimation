import React from "react";
import {Row, Col} from "react-bootstrap";
import HighQuality from "../../images/HighQualityImg.jpg";
import './highquality.scss';
import Time from "../../icons/clock.fa03b2f8.svg";
import Avatar from "../../icons/download1.svg";
import Camera from "../../icons/download.svg";
import Money from "../../icons/download2.svg";


const HighQualityCom = () => {
    return (
        <div className="highQuality">
            <div className="container-fluid">
                <Row>
                    <Col md={6}>
                        <h2 className="highQuality-h2">High <span className="span"> quality </span> services.</h2>
                        <div className="row">
                            <div className="col-6">
                                <div className="d-flex">
                                    <img src={Time} alt="Photo"/>
                                    <h3 className="highQuality-h3">Efficient</h3>
                                </div>
                                <p className="highQuality-p">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="col-6">
                                <div className="d-flex">
                                    <img src={Avatar} alt="Photo"/>
                                    <h3 className="highQuality-h3">Teamwork</h3>
                                </div>
                                <p className="highQuality-p">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="col-6">
                                <div className="d-flex">
                                    <img src={Camera} alt="Photo"/>
                                    <h3 className="highQuality-h3">Pro Grade Gear</h3>
                                </div>
                                <p className="highQuality-p">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="col-6">
                                <div className="d-flex">
                                    <img src={Money} alt="Photo"/>
                                    <h3 className="highQuality-h3">Affordable</h3>
                                </div>
                                <p className="highQuality-p">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img className="highQualityImg" src={HighQuality} alt="Photo"/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default HighQualityCom;
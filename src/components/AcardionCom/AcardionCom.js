import React from "react";
import {Accordion, Card} from "react-bootstrap";
import "./acardionCom.scss";


const AcardionCom = () => {
    return (
        <div className="container-fluid">
            <Accordion defaultActiveKey="0">
                <div className="bbb card border-0 bg-transparent text-white">
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        How Do I Start?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p className="Acordion-p">Lorem ipsum dolor sit amet.</p>
                            <p className="Acordion-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                                reprehenderit perferendis
                                sunt magni dolores ratione.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                    <div className="faq-line">

                    </div>
                </div>
                <div className="bbb card border-0 bg-transparent text-white">
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        What Products do you offer?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <p className="Acordion-p">Lorem ipsum dolor sit amet.</p>
                            <p className="Acordion-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                                reprehenderit perferendis
                                sunt magni dolores ratione.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                    <div className="faq-line">

                    </div>
                </div>
                <div className="bbb card border-0 bg-transparent text-white">
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        Diferrent Payment Methods
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <p className="Acordion-p">Lorem ipsum dolor sit amet.</p>
                            <p className="Acordion-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                                reprehenderit perferendis
                                sunt magni dolores ratione.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                    <div className="faq-line">

                    </div>
                </div>
                <div className="bbb card border-0 bg-transparent text-white">
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        Daily Schedule
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <p className="Acordion-p">Lorem ipsum dolor sit amet.</p>
                            <p className="Acordion-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                                reprehenderit perferendis
                                sunt magni dolores ratione.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                    <div className="faq-line">

                    </div>
                </div>

            </Accordion>
        </div>
    )
}

export default AcardionCom;
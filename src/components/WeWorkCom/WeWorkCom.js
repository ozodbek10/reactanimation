import React, {useState} from "react";
import {Row, Col, Button} from "react-bootstrap";
import WeWorkImg from '../../images/WeWorkImg.jpg';
// import './weWork.scss';
import styled from 'styled-components'
import {motion} from 'framer-motion'

const WeWorkCom = () => {
    const comtAnimation = {
        hidden: {
            x: -1000
        },
        show: {
            x: 0,
            transition: {
                duration: 2,
                when: 'beforeChildren'
            }
        },
    }

    const TitleAnimation = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 2,
            }
        }
    }

    return (
        <div>
            <ContainerFluid>
                <Row className="row">
                    <Col md={6} className="padding">
                        <motion.div variants={comtAnimation} initial="hidden"animate="show" className="title text-white">
                            <motion.div variants={comtAnimation}  className="wework">
                                <motion.div variants={TitleAnimation} >We work to make</motion.div>
                            </motion.div>
                            <motion.h1 variants={TitleAnimation} className="wework">your <span className="span"> dreams </span> come</motion.h1>
                            <motion.h1 variants={TitleAnimation} className="wework">true.</motion.h1>
                            <motion.h1 variants={TitleAnimation} className="wework-p">Contact us for any photography or videography ideas that you have. We have professionals
                                with amazing skills to help you achieve it.
                            </motion.h1>
                            <Button className="bt">
                                Contact Us
                            </Button>
                        </motion.div>
                    </Col>
                    <Col md={6}>
                        <img className="weworkimg" src={WeWorkImg} alt="Photo"/>
                    </Col>
                </Row>
            </ContainerFluid>
        </div>
    )
}
const ContainerFluid = styled.div`
   margin: auto;
   max-width: 85% !important;
   .row{
    margin: 5rem 0;
    .padding{
      padding-right: 5rem;
    }
    .title{
      padding-top: 10rem;
      font-size: 4rem;
      .wework{
        font-size: 4rem;
        overflow: hidden;
      }
      .span{
        font-weight: bold !important;
        color: rgb(35, 217, 151) !important;
      }
      .wework-p{
        padding-top: 2.5rem;
        color: rgb(204, 204, 204) !important;
        font-size: 1.4rem !important;
        line-height: 150% !important;
      }
      .bt{
        font-family: Inter, sans-serif;
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid rgb(35, 217, 151);
        background: transparent;
        color: white;
        transition: all 0.5s ease 0s;
      }
      .bt:hover{
        background-color: rgb(35, 217, 151);
      }
    }
  }
  .weworkimg{
    width: 100% !important;
    object-fit: cover;
    height: 80vh !important;
  }
`

export default WeWorkCom;
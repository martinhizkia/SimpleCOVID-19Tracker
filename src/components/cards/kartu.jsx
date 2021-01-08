import React from 'react';
import CountUp from 'react-countup';
import cx from 'classnames';
import { CardPanel, Row, Col, ProgressBar } from 'react-materialize';

const kartu =({data: {confirmed ,recovered, deaths, lastUpdate} }) =>{ 
   if(!confirmed){
        return(
            <div>
            <Row>
                <Col s={12}>
                    <ProgressBar progress={70} />
                </Col>
                <Col s={12}>
                    <ProgressBar />
                </Col>
            </Row>
            </div>
        );
    }
   
    return(
        <div className="container">
            <Row>
                <Col
                    className=""
                    s={4} >
                    <CardPanel className="grey lighten-5">
                        <blockquote>
                        <h6 className="">
                            COVID-19 Total Cases
                        </h6>
                        </blockquote>
                        <hr/>
                        <p>
                            Total Cases
                            <br/>
                           <h5>
                           <CountUp 
                                start = {0}
                                end = {confirmed.value}
                                duration = {2}
                                separator=","/>
                            </h5> 
                        </p>
                        <p>
                            Last Update:   {new Date(lastUpdate).toDateString()}
                        </p>
                    </CardPanel>
                </Col>
                <Col
                    className="white-text"
                    s={4} >
                    <CardPanel className="purple">
                    <blockquote>
                        <h6 className="">
                            COVID-19 Total Recovered
                        </h6>
                        </blockquote>
                        <hr/>
                        <p>
                            Total Cases
                            <br/>
                           <h5>
                           <CountUp 
                                start = {0}
                                end = {recovered.value}
                                duration = {2}
                                separator=","/>
                            </h5> 
                        </p>
                        <p>
                            Last Update:   {new Date(lastUpdate).toDateString()}
                        </p>
                    </CardPanel>
                </Col>
                <Col
                    className="white-text"
                    s={4} >
                    <CardPanel className="deep-purple">
                    <blockquote>
                        <h6 className="">
                            COVID-19 Total Deaths
                        </h6>
                        </blockquote>
                        <hr/>
                        <p>
                            Total Cases
                            <br/>
                           <h5>
                           <CountUp 
                                start = {0}
                                end = {deaths.value}
                                duration = {2}
                                separator=","/>
                            </h5> 
                        </p>
                        <p>
                            Last Update:   {new Date(lastUpdate).toDateString()}
                        </p>
                    </CardPanel>
                </Col>
        </Row>
        </div>
    )
}

export default kartu;
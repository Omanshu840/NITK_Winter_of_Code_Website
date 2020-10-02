import { reach } from "yup";
import React from "react";
import { Jumbotron, Container, Row, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import "./newhome.css";

const NewHome = () => {
    return (
        <div className="homepage">
            <Jumbotron className="text-center">
                <div className="jumbo-text">
                    <h1 className="display-1">NWoC</h1>
                    <h2>NITK Winter of Code</h2>
                </div>
            </Jumbotron>

            <Container className="intro padding">
                <Row className="text-center">
                    <div className="col-12">
                        <h1 className="display-3">
                            KickStart Open Source
                        </h1>
                    </div>
                </Row>

                <Row className="text-center">
                    <div className="col-12">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>

                </Row>
            </Container>

            <Container className="section-2 padding">
                <Row className="text-center">
                    <div className="col-sm-12 col-md-4">
                        <Card className="py-3 my-3">
                            <CardBody>
                                <CardTitle className="card-heading"><h2>Students</h2></CardTitle>
                                <CardText>Students contact the open source organizations they want to work with and write up a project proposal for the summer.</CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <Card className="py-3 my-3">
                            <CardBody>
                                <CardTitle className="card-heading"><h2>Organizations</h2></CardTitle>
                                <CardText>Open source projects apply to be mentor organizations. Once accepted, organizations discuss possible ideas with students.</CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <Card className="py-3 my-3">
                            <CardBody>
                                <CardTitle className="card-heading"><h2>Mentors</h2></CardTitle>
                                <CardText>Existing contributors with the organizations can choose to mentor a student project. Mentor interaction is a vital part of the program.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </Container>

            <Container className="section-3 padding">
                <Row>
                    <div className="col-12 col-md-6">
                        <img src={require('./img/img2.jpg')} alt="img" className="img-fluid" />
                        <div className="caption text-white">
                            <h1 className="display-2">How Does <br />it Work?</h1>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 content pt-5">
                        <p>
                            Open source projects apply to be mentor organizations. Once accepted, organizations discuss possible ideas with students and then decide on the proposals they wish to mentor for the summer.
                        </p>

                        <p>If accepted, students spend a month integrating with their organizations prior to the start of coding. Students then have three months to code while meeting the deadlines agreed upon with their mentors.</p>

                        <p>
                            Existing contributors with the organizations can choose to mentor a student project. Mentors and students work together to determine appropriate milestones and requirements for the summer.
                        </p>
                    </div>
                </Row>
            </Container>

            <Container className="padding">
                <Row>
                    <div className="col-12">
                        <h1 className="display-2 my-5">Eligibility</h1>
                        <p className="my-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                </Row>
            </Container>

            <Container className="padding">
                <div className="col-12">
                    <h1 className="display-2 my-5">Timeline</h1>
                </div>
                <div className="Timeline">
                    <ul>
                        <li className="left">
                            <div className="content">
                                <h2>heading</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                            <div className="time">
                                1 December 2020
                            </div>
                        </li>

                        <li className="right">
                            <div className="content">
                                <h2>heading</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                            <div className="time">
                                10 December 2020
                        </div>
                        </li>

                        <li className="left">
                            <div className="content">
                                <h2>heading</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                            <div className="time">
                                1 December 2020
                        </div>
                        </li>
                        <div style={{ clear: "both" }}></div>
                    </ul>
                </div>
            </Container>
        </div >
    )
}

export default NewHome;
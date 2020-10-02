import { reach } from "yup";
import React from "react";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Jumbotron, Container, Row, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import "./newhome.css";

const NewHome = () => {
    return (
        <div className="homepage">
            <Jumbotron className="text-center">
                <Fade top>
                    <div className="jumbo-text">
                        <h1 className="display-1">NWoC</h1>
                        <h2>NITK Winter of Code</h2>
                    </div>
                </Fade>
            </Jumbotron>

            <div className="intro even-section">
                <Container className="padding">
                    <Fade top>
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
                    </Fade>
                </Container>
            </div>

            <div className="odd-section">
                <Container className="section-2 padding">
                    <Row className="text-center">
                        <div className="col-sm-12 col-md-4">
                            <Zoom>
                                <Card className="my-3">
                                    <CardBody>
                                        <CardTitle className="card-heading"><h2>Students</h2></CardTitle>
                                        <CardText>Students contact the open source organizations they want to work with and write up a project proposal for the summer.</CardText>
                                    </CardBody>
                                </Card>
                            </Zoom>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <Zoom>
                                <Card className="py-3 my-3">
                                    <CardBody>
                                        <CardTitle className="card-heading"><h2>Organizations</h2></CardTitle>
                                        <CardText>Open source projects apply to be mentor organizations. Once accepted, organizations discuss possible ideas with students.</CardText>
                                    </CardBody>
                                </Card>
                            </Zoom>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <Zoom>
                                <Card className="py-3 my-3">
                                    <CardBody>
                                        <CardTitle className="card-heading"><h2>Mentors</h2></CardTitle>
                                        <CardText>Existing contributors with the organizations can choose to mentor a student project. Mentor interaction is a vital part of the program.</CardText>
                                    </CardBody>
                                </Card>
                            </Zoom>
                        </div>
                    </Row>
                </Container>
            </div>

            <div className="intro even-section">
                <Container className="section-3 padding">
                    <Row>
                        <div className="col-12 col-md-6 Subheading">
                            <div className="caption">
                                <h1 className="display-2">How Does <br />it Work?</h1>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 content pt-5">
                            <Fade left>
                            <p>
                                Open source projects apply to be mentor organizations. Once accepted, organizations discuss possible ideas with students and then decide on the proposals they wish to mentor for the summer.
                        </p>
                        </Fade>
                            <Fade left>
                            <p>If accepted, students spend a month integrating with their organizations prior to the start of coding. Students then have three months to code while meeting the deadlines agreed upon with their mentors.</p>
                            </Fade>
                            <Fade left>
                            <p>
                                Existing contributors with the organizations can choose to mentor a student project. Mentors and students work together to determine appropriate milestones and requirements for the summer.
                                
                        </p>
                        </Fade>
                        </div>
                    </Row>
                </Container>
            </div>

            <div className="intro odd-section">
                <Container className="padding">
                    <Row>
                        <   div className="col-12 col-md-6 order-md-last  Subheading">
                            <div className="caption">
                                <h1 className="display-2">Eligibility</h1>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 content pt-5">
                            <Fade right>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                            </Fade>
                        </div>
                    </Row>
                </Container>
            </div>

            <div className="even-section padding">
                
                <Fade top>
                    <h1 className="display-2 my-5">Timeline</h1>
                </Fade>
                <div className="Timeline">
                    <Container>
                        <div className="timeline-item-left">
                            <div className="timeline-img"></div>

                            <Fade left>
                                <div className="timeline-content">
                                    <h2>Projects announced</h2>
                                    <div className="date">April 15, 2020</div>
                                </div>
                            </Fade>
                        </div>

                        <div className="timeline-item-right">
                            <div className="timeline-img"></div>

                            <Fade right>
                                <div className="timeline-content">
                                    <h2>Student application period</h2>
                                    <div className="date">April 15-20, 2020</div>
                                </div>
                            </Fade>
                        </div>

                        <div className="timeline-item-left">
                            <div className="timeline-img"></div>

                            <Fade left>
                                <div className="timeline-content">
                                    <h2>Students selected</h2>
                                    <div className="date">April 30, 2020</div>
                                </div>
                            </Fade>
                        </div>

                        <div className="timeline-item-right">
                            <div className="timeline-img"></div>

                            <Fade right>
                                <div className="timeline-content">
                                    <h2>Students begin working on projects</h2>
                                    <div className="date">May 1, 2020</div>
                                </div>
                            </Fade>
                        </div>

                        <div className="timeline-item-left">
                            <div className="timeline-img"></div>

                            <Fade left>
                            <div className="timeline-content">
                                <h2>Student evaluation period</h2>
                                <div className="date">June 1-3, 2020</div>
                            </div>
                            </Fade>
                        </div>

                        <div className="timeline-item-right">
                            <div className="timeline-img"></div>

                            <Fade right>
                                <div className="timeline-content">
                                    <h2>Results announced</h2>
                                    <div className="date">June 5, 2020</div>
                                </div>
                            </Fade>
                        </div>

                    </Container>
                </div>
            </div>

            <footer>
                <Container className="padding">
                    <Row className="text-center">
                        <div className="col-md-4">
                            <h1 className="py-4">NITK Winter of Code</h1>
                            <p>Winter of Code is an initiative by the National Institute of Technology to promote Open Source culture.</p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="py-4">Links</h1>
                            <p>About</p>
                            <p>Projects</p>
                            <p>Orgranizations</p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="py-4">Contact Information</h1>
                            <p>Email: examplemail@xyx.com</p>
                            <p>Telegram: example@NITK</p>
                        </div>
                    </Row>
                </Container>
            </footer>
        </div >
    )
}

export default NewHome;
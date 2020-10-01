import { reach } from "yup";
import React from "react";
import { Jumbotron, Container, Row } from 'reactstrap';
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

            <Container className="section">
                <Row className="text-center">
                    <div className="col-12">
                        <h1 className="display-4">
                            KickStart Open Source
                        </h1>
                    </div>
                </Row>

                <Row className="text-center">
                    <div className="col-12">
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>

                </Row>

                <hr className="my-4" />
            </Container>

            <Container className="section">
                <Row className="text-center">
                    <div className="col-sm-12 col-md-4">
                        <h3>Student</h3>
                        <p>Students contact the open source organizations they want to work with and write up a project proposal for the summer.</p>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <h3>Organizations</h3>
                        <p>Open source projects apply to be mentor organizations. Once accepted, organizations discuss possible ideas with students. </p>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <h3>Mentors</h3>
                        <p>Existing contributors with the organizations can choose to mentor a student project. </p>
                    </div>
                </Row>
                <hr></hr>
            </Container>

            <Container className="section">
                <Row>
                    <div className="col-12 col-md-6">
                        <h1>How does it work?</h1>
                        <p>
                            Open source projects apply to be mentor organizations. Once accepted, organizations discuss possible ideas with students and then decide on the proposals they wish to mentor for the summer.
                        </p>

                        <p>If accepted, students spend a month integrating with their organizations prior to the start of coding. Students then have three months to code while meeting the deadlines agreed upon with their mentors.</p>

                        <p>
                            Existing contributors with the organizations can choose to mentor a student project. Mentors and students work together to determine appropriate milestones and requirements for the summer.
                        </p>
                    </div>

                    <div className="col-lg-6">
                        <img src={require('./img/img2.jpg')} alt="img" className="img-fluid" />
                    </div>
                </Row>
            </Container>

            <figure>
                <div className="fixed-wrap">
                    <div id="fixed">

                    </div>
                </div>
            </figure>

            <Container>
                <Row>
                    <div className="col-12">
                        <h1>Eligibility</h1>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default NewHome;
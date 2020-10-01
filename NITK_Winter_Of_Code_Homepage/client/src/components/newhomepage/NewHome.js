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

            <Container>
                <Row className="section-2 text-center">
                    <div className="col-12">
                        <h1 className="display-4">
                            KickStart Open Source
                        </h1>
                    </div>
                    <hr />
                    <div className="col-12">
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>

                </Row>
            </Container>
        </div>
    )
}

export default NewHome;
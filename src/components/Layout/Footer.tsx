import { FunctionComponent } from "react";
import { Col, Container, Row } from "reactstrap";
import copyleft from "./copyleft.svg";

export const Footer: FunctionComponent = () => {
    return (
        <div className="footer-container bg-dark">
            <Container className="pb-3 pt-2 mt-2">
                <Row>
                    <Col>
                        <div className="text-muted d-flex">
                            <p className="mb-0">
                                Copyleft{" "}
                                <img
                                    style={{ marginBottom: "2px" }}
                                    src={copyleft}
                                    height="15"
                                    alt=""
                                />{" "}
                                2022, Jack Hermanson. No rights reserved.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

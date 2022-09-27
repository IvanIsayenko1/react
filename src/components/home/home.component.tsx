import { Col, Row } from "react-bootstrap";
import "./home.styles.css";
import MyPhoto from "../../assets/img/personal.png";
import { Fragment, useEffect } from "react";
import AboutMe from "../about-me/about-me.component";
const Particles = require("particlesjs");

const Home = () => {
    useEffect(() => {
        Particles.init({
            selector: ".background",
            color: "rgb(40, 72, 49)",
        });
    }, []);

    return (
        <Fragment>
            <canvas className="background"></canvas>
            <Row className="align-items-center justify-content-center viewport-height">
                <Col sm>
                    <h1 className="mb-0 text-lg my-name">Ivan Isayenko</h1>
                    {/* <h3 className="lead text-muted mb-40">
                        Full-stack developer
                    </h3> */}
                    <dl className="description-2">
                        <dt>Speciality</dt>
                        <dd>Front-End Development</dd>
                        <dt>Years experience</dt>
                        <dd>4+</dd>
                    </dl>
                    <AboutMe></AboutMe>
                </Col>
                <Col sm>
                    <div className="col-sm text-center">
                        <img src={MyPhoto} width="90%" alt="Ivan Isayenko" />
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Home;

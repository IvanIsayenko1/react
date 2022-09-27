import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ScrollReveal from "scrollreveal";

const AboutMe = () => {
    useEffect(() => {
        ScrollReveal().reveal(".aboutMe", { delay: 300 });
    }, []);

    return (
        <Row
            className="align-items-center justify-content-center aboutMe"
            data-aos="fade-in"
        >
            <Col sm>
                <span className="part-tittle">About me</span>
                <p>
                    Hello and welcome to my portfolio! I am Ivan, I live in
                    Barcelona and I will try to explain to you in the shortest
                    possible way who I am and what I do. <br />I started my
                    adventure in the world of programming in 2018. In these
                    years, I have always been looking for new interesting
                    challenges that make me grow professionally. This is how I
                    ended up being a full-stack programmer and I have no
                    intention of stopping.
                </p>
            </Col>
        </Row>
    );
};

export default AboutMe;

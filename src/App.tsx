import "./App.css";
import Home from "./components/home/home.component";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./components/nav-bar/nav-bar.component";
import { Fragment } from "react";

function App() {
    return (
        <Fragment>
            {/* <NavBar /> */}
            <Container fluid="md" className="viewport-height">
                <Row></Row>
                <Row>
                    <Col>
                        <Home></Home>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default App;

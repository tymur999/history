import {Container, Nav, Navbar} from "react-bootstrap";
import wave from "../img/wave1.svg";
import "../css/nav.scss";

export function Navigation() {
    return (
        <>
            <div id="main">
                <Navbar className="navbar-light" bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand
                            title="Kiwoon logo"
                            href="/"
                            style={{ height: 34, width: 140 }}
                            className="navbar-brand"
                        />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link
                                    href="/"
                                >
                                    Definition
                                </Nav.Link>
                                <Nav.Link
                                    href="/background"
                                >
                                    Background
                                </Nav.Link>
                                <Nav.Link
                                    href="/actions"
                                >
                                    Actions
                                </Nav.Link>
                                <Nav.Link
                                    href="/short"
                                >
                                    Short-Term
                                </Nav.Link>
                                <Nav.Link
                                    href="/long"
                                >
                                    Long-Term
                                </Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link>
                                    Annotated Bib
                                </Nav.Link>
                                <Nav.Link>
                                    Process Paper
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <img id="shore" src={wave}/>
        </>
    )
}
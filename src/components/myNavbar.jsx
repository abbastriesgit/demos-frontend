import {Navbar, Container,Nav,NavDropdown} from "react-bootstrap";


function MyNavbar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" fixed={"top"}>
            <Container>
                <Navbar.Brand href="/">Abbas Ali</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/experience" >Experience</Nav.Link>
                        <NavDropdown title="Live Demos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/demo/caption-contest">Caption Contest</NavDropdown.Item>
                            <NavDropdown.Item href="/demo/adv-tic-tac-toe">Advanced Tic-Tac-Toe</NavDropdown.Item>
                            <NavDropdown.Item href="/demo/habit-tracker">Habit Tracker</NavDropdown.Item>
                            <NavDropdown.Item href="/demo/topic-reviser">Topic Reviser </NavDropdown.Item>
                            {/*<NavDropdown.Divider />*/}
                            {/*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default MyNavbar;
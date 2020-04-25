import React, { Component, createRef } from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import './navbar.scss'
import {NavDropdown,Nav,Form,FormControl,Button,Navbar} from 'react-bootstrap/dist/react-bootstrap'
import SupportComponent from '../support/support.components'
import ProfileComponent from '../profile/profile.component'



export default class MyNavbar extends Component {
    constructor(props) {
        super(props)

        this.myRef = createRef()   
    }

    render() {
        return(
            <div  className="sticky-top">
                <Navbar bg="light" expand="lg" id="myNav" >
                    <Navbar.Brand href="/">FSTR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/">Products</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/women">Women</NavDropdown.Item>
                            <NavDropdown.Item href="/men">Men</NavDropdown.Item>
                            <NavDropdown.Item href="/children">Children</NavDropdown.Item>
                            <NavDropdown.Item href="/accessories">Accessories</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/sales">Sales</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    <Nav className="mr-auto" id="navProfileItems">
                        <Nav.Link to='/support' href="/support">Support</Nav.Link>
                        <Nav.Link to="/profile" href="/profile">Profile</Nav.Link>
                        <Nav.Link to='/cart' href='/cart'>Cart</Nav.Link>
                    </Nav>
                </Navbar>

                <Router>
                    <Route path='/support' component={SupportComponent}/>
                    <Route path='/profile' component={ProfileComponent}/>
                    <Route path='/'/>
                </Router>
            </div>
        )

    }
}


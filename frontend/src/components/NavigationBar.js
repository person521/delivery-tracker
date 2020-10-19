import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
        background-color: #800000;
    }

    .navbar-brand {
        color: #e3bc20;
    }

    .navbar-nav .nav-link {
        color: #eeeeee;

        &:hover {
            color: #e3bc20;
        }
    }
`

export default function NavigationBar() {
    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">Delivery Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/current">Current Deliveries</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/past">Delivery History</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/past">Login</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}
import React, {Component} from "react";
import { Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse,
Nav, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Container, } from 'reactstrap';
import { NavLink, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const Bounce=styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class Header extends Component {
    constructor(props){
        super(props);

        this.toggleNav=this.toggleNav.bind(this); 
        this.toggleModal=this.toggleModal.bind(this); 
        this.handleSubmit=this.handleSubmit.bind(this);
       
        this.state={
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.toggleModal();
        //eventually want to post and redirect 
        alert(`Hello world, form submited. ${e.target}`);
    }

    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className= "container">
                        <div className= "row">
                            <div className= "col">
                                <Bounce>
                                <h1>SBRafting-slogan here</h1>
                                </Bounce>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/sbrafting" >
                            <img src="/img/logo.jpg" height="30" width="30" alt="sbrafting logo"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" style={{ color:"white" }}>
                                        <i className="fa fa-home fa-lg"/> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/destinations" style={{ color:"white" }}>
                                        <i className="fa fa-compass fa-lg"/> Destinations
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus" style={{ color:"white" }}>
                                        <i className="fa fa-info fa-lg"/> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact" style={{ color:"white" }}>
                                        <i className="fa fa-address-card fa-lg"/> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span>
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-ship fa-lg"/> 
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Find a Destination!
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="destination">Destination</Label>
                                <Input type="select" name="destination" id="destination">
                                    <option value="0">Select...</option> 
                                    <option value="desolationCanyon">Desolation Canyon</option> 
                                    <option value="2">Gates of Lodore</option> 
                                    <option value="3">Yampa Canyon</option>
                                    <option value="4">Grand Canyon</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="duration">Duration</Label>
                                <Input type="select" name="duration" id="duration">
                                    <option value="0">Select...</option> 
                                    <option value="1">2-3 Days </option> 
                                    <option value="2">4-7 Days</option> 
                                    <option value="3">8+ Days</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="travelmonth">Travel Month</Label>
                                <Input type="select" name="travelmonth" id="travelmonth">
                                    <option value="0">Select...</option> 
                                    <option value="1">April</option> 
                                    <option value="2">May</option> 
                                    <option value="3">June</option>
                                    <option value="4">July</option>
                                    <option value="4">August</option>
                                    <option value="4">September</option>
                                </Input>
                            </FormGroup>
                            <div className="modalSubmitBtn">
                                <Button type="submit" value="submit" color="primary">View Trips</Button>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;
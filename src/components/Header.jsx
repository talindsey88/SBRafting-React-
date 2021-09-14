import React, {Component} from "react";
import { Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse,
Nav, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Container, } from 'reactstrap';
import { NavLink, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import FORM_FIELDS from "../shared/formFields";

const Bounce=styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class Header extends Component {
    constructor(props){
        super(props);

        this.toggleNav=this.toggleNav.bind(this); 
        this.toggleModal=this.toggleModal.bind(this); 
        this.handleSubmit=this.handleSubmit.bind(this);
       
        this.state={
            isNavOpen: false,
            isModalOpen: false,
            formFields: FORM_FIELDS
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
                            <img src="/sbrafting/img/logo.jpg" height="30" width="30" alt="sbrafting logo"/>
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
                                {this.state.formFields ?
                                            this.state.formFields.filter(f => f.type=="destination").map(f => 
                                                <option key={f.field.id} value={f.field.id}>
                                                {f.field.value}
                                                </option>
                                                )  
                                            :<option/>
                                        }
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="duration">Duration</Label>
                                <Input type="select" name="duration" id="duration">
                                {this.state.formFields ?
                                            this.state.formFields.filter(f => f.type=="duration").map(f => 
                                                <option key={f.field.id} value={f.field.id}>
                                                {f.field.value}
                                                </option>
                                                )  
                                            :<option/>
                                        }
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="travelmonth">Travel Month</Label>
                                <Input type="select" name="travelmonth" id="travelmonth">
                                {this.state.formFields ?
                                            this.state.formFields.filter(f => f.type=="month").map(f => 
                                                <option key={f.field.id} value={f.field.id}>
                                                {f.field.value}
                                                </option>
                                                )  
                                            :<option/>
                                        }
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
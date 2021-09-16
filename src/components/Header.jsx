import React, {Component} from "react";
import { Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse,
Nav, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Container, } from 'reactstrap';
import { NavLink, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import FORM_FIELDS from "../shared/formFields";
import { withRouter } from "react-router";
import { Control, Errors, LocalForm } from "react-redux-form";


const required = val => val && val>0;



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

    

    handleSubmit(values){
        console.log("form submitted =", values)
        this.toggleModal();
        //eventually want to post and redirect 
        const payload = {
            id: parseInt(values.destination) -1
        };
        this.props.formAction(payload);
        this.props.history.push("/destinations");
    }

    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className= "container">
                        <div className= "row">
                            <div className= "col">
                                <Bounce>
                                <h1>SBRafting-A Better Way To Raft</h1>
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
                    <LocalForm className="" onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group col-md-6">
                                <Label htmlFor="destination" md={2}>Destination</Label>
                                <div>
                                    <Control.select 
                                        model=".destination"
                                        id="destination"
                                        name="destination"
                                        className="form-control"
                                        validators={{required}}
                                    >
                                        {this.state.formFields ?
                                            this.state.formFields.filter(f => f.type=="destination").map(f => 
                                                <option key={f.field.id} value={f.field.id}>
                                                {f.field.value}
                                                </option>
                                                )  
                                            :<option/>
                                        }
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".destination"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required:"Please Select a Destination"
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <Label htmlFor="duration" md={2}>Duration</Label>
                                <div>
                                    <Control.select
                                        model=".duration"
                                        id="duration"
                                        name="duration"
                                        className="form-control"
                                        validators={{required}}
                                    >
                                        {this.state.formFields ?
                                            this.state.formFields.filter(f => f.type=="duration").map(f => 
                                                <option key={f.field.id} value={f.field.id}>
                                                {f.field.value}
                                                </option>
                                                )  
                                            :<option/>
                                        }
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".duration"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required:"Please Select a Duration"
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <Label htmlFor="travelMonth" md={2}>Travel Month</Label>
                                <div>
                                    <Control.select
                                        model=".travelMonth"
                                        id="travelMonth"
                                        name="travelMonth"
                                        className="form-control"
                                        validators={{required}}
                                    >
                                        {this.state.formFields ?
                                            this.state.formFields.filter(f => f.type=="month").map(f => 
                                                <option key={f.field.id} value={f.field.id}>
                                                {f.field.value}
                                                </option>
                                                )  
                                            :<option/>
                                        }
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".travelMonth"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required:"Please Select a Travel Month"
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="modalSubmitBtn">
                                    <Button type="submit" value="submit" color="primary">View Trips</Button>
                                </div>
                            </div>
                        </LocalForm>
                        
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default withRouter(Header);
import React, {Component} from "react";
import { Control, Form, Errors, LocalForm } from "react-redux-form";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from "reactstrap";

const required = val => val && val>0;


class FYAdventure extends Component {
    constructor(props){
        super(props);
        this.state= {
            destination: "",
            duration: "",
            travelMonth: "",
            touched: {
                destination: false,
                duration: false,
                travelMonth: false, 
            }
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {
        return(
            <div className="container">
                <div className="fya row row-content">
                    <div className="col-12">
                    <h2 className="fyaheader">Find Your Adventure</h2><hr/>
                    </div>
                    <div className="col-md-10">
                        <LocalForm className="adform" onSubmit={values => this.handleSubmit(values)}>
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
                                        <option value="0">Select...</option> 
                                        <option value="1">Desolation Canyon</option> 
                                        <option value="2">Gates of Lodore</option> 
                                        <option value="3">Yampa Canyon</option>
                                        <option value="4">Grand Canyon</option>
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
                                        <option value="0">Select...</option> 
                                        <option value="1">2-3 Days </option> 
                                        <option value="2">4-7 Days</option> 
                                        <option value="3">8+ Days</option>
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
                                        <option value="0">Select...</option> 
                                        <option value="1">April</option> 
                                        <option value="2">May</option> 
                                        <option value="3">June</option>
                                        <option value="4">July</option>
                                        <option value="4">August</option>
                                        <option value="4">September</option>
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
                                    <div>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </div>
                            </div>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}
export default FYAdventure;
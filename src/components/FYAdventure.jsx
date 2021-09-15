import React, {Component} from "react";
import { Control, Form, Errors, LocalForm } from "react-redux-form";
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from "reactstrap";
import { withRouter } from "react-router";


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
            },
            formFields: props.formFields
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
        const payload = {
            id: parseInt(values.destination) -1
        };
        this.props.formAction(payload);
        this.props.history.push("/destinations");
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


export default withRouter(FYAdventure);
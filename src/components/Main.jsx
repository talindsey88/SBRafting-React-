import React, {Component} from "react";
import { Switch, Route, Redirect, withRouter, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { SplashScreen } from './SplashScreen';
import Home from './Home';
import HeaderToggle from "./HeaderToggle";
import FooterToggle from "./FooterToggle";
import IMAGES from "../shared/images";
import Destinations from "./Destinations";
import FORM_FIELDS from "../shared/formFields";
import DESTINATIONS from "../shared/destinations";

class Main extends Component{ 
    constructor(props){
        super(props);
        this.state={
            images: IMAGES,
            formFields: FORM_FIELDS,
            destinations: DESTINATIONS
        };
    }


    render() {
        return(
            <div>
                <HeaderToggle/>
                <Switch>
                    <Route exact path="/" component={SplashScreen} />
                    <Route path="/home" render={() => <Home images={this.state.images} formFields={this.state.formFields}/>} />
                    <Route path="/destinations" render={() => <Destinations data={this.state.destinations}/>} />
                    <Redirect to="/home"/>
                </Switch>
                <FooterToggle/>
            </div>
        );
    }

}

export default withRouter(connect(null, null)(Main));
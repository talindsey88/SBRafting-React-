import React, {Component} from "react";
import { Switch, Route, Redirect, withRouter, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { SplashScreen } from './SplashScreen';
import Home from './Home';
import HeaderToggle from "./HeaderToggle";
import FooterToggle from "./FooterToggle";
import IMAGES from "../shared/images";

class Main extends Component{ 
    constructor(props){
        super(props);
        this.state={
            images: IMAGES
        };
    }


    render() {
        return(
            <div>
                <HeaderToggle/>
                <Switch>
                    <Route exact path="/" component={SplashScreen} />
                    <Route path="/home" render={() => <Home images={this.state.images}/>} />
                    <Redirect to="/home"/>
                </Switch>
                <FooterToggle/>
            </div>
        );
    }

}

export default withRouter(connect(null, null)(Main));
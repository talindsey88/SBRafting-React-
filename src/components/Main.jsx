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
import { fyadventureFormSubmitted, resetCards } from "../redux/ActionCreators";

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
                <HeaderToggle formAction={this.props.fyadventureFormSubmitted}/>
                <Switch>
                    <Route exact path="/" component={SplashScreen} />
                    <Route path="/home" render={() => <Home formAction={this.props.fyadventureFormSubmitted} images={this.state.images} formFields={this.state.formFields}/>} />
                    <Route path="/destinations" render={() => <Destinations resetAction={this.props.resetCards} data={this.state.destinations}/>} />
                    <Redirect to="/home"/>
                </Switch>
                <FooterToggle/>
            </div>
        );
    }

}


const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = {
    fyadventureFormSubmitted: formInfo => fyadventureFormSubmitted(formInfo),
    resetCards: () => resetCards()
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

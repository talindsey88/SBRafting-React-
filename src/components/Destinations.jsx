import React, {Component} from "react";
import Destination from "./Destination";
import { connect } from "react-redux";

class Destinations extends Component{
    constructor (props){
        super(props);
        this.state={
            data: props.data
        };
    }

    componentDidUpdate(){
      //  window.scrollTo(0,0);
    }

    componentDidMount(){
        if(this.props.destinations){
            const newArray = this.state.data.map((d, i) => {
                return {...d, isFlipped: this.props.destinations[i].isFlipped};
            });
            this.setState({
                data: newArray
            });
        }
    }

    render(){
        return(
            <div className="container">
                {this.state.data ?
                    this.state.data.map(d => 
                            <div className="row">
                                <div className="col">
                                    <Destination data={d}/>
                                </div>
                            </div>
                        )
                :<div/>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        destinations: state.destinations.destinations
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps) (Destinations);
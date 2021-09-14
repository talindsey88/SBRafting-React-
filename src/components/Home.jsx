import React, {Component} from "react";
import MyCarousel from "./MyCarousel";
import FYAdventure from "./FYAdventure";


class Home extends Component {
    render() {
        return(
            <div className="" id="roothome">
                <MyCarousel images={this.props.images}/>
                <FYAdventure formFields={this.props.formFields}/>
            </div>
        );
    }
}
export default Home;
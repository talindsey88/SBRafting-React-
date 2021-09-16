import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


class MyCarousel extends Component {
    constructor(props){
        super(props);
        this.renderImage= this.renderImage.bind(this);
    }

    renderImage(image){
        console.log(image);
        return(
            <div key={image.id}>
                <img src={image.src}/>
                <p className="legend">{image.lgd}</p>
            </div>
        );
    }

    render() {
        if(this.props.images){
            const renderImage = this.props.images.map(i => {
                    return this.renderImage(i);
            });

            return( 
                <Carousel autoPlay dynamicHeight infiniteLoop>
                    {renderImage}
                </Carousel>
            );
        }
        return <div/>;
    }
}
export default MyCarousel;
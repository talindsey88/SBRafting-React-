import React, {Component} from "react";
import ReactCardFlip from "react-card-flip";

const CARDSTYLE={
    border: "1px solid black",
    padding: "20px",
    margin: "20px",
    width: "80%",
    minHeight: "600px",
}

class Destination extends Component{
    constructor (props){
        super(props);
        this.state={
            isFlipped: props.data.isFlipped,
            data: props.data
        };
        this.handleClick=this.handleClick.bind(this);
        this.renderFront=this.renderFront.bind(this);
        this.renderBack=this.renderBack.bind(this);
    }
    componentDidMount(){
        if(this.props.data){
            this.setState({
               isFlipped: this.props.data.isFlipped
            });
        }
    }
    handleClick(e){
        e.preventDefault();
        this.setState(prevState => ({isFlipped:!prevState.isFlipped}))
    }
    renderFront(frontData){
        return(
            <div onClick={this.handleClick} className="CardFront" style={CARDSTYLE}>
                <div className="cardCon">
                    <div className="frontImgPol">
                        <img src={frontData.img} alt={frontData.name} className="frontImg"/>
                    </div>
                    <h4>{frontData.name}</h4>
                </div>
            </div>
        );
    }

    renderBack(backData){
        return(
            <div onClick={this.handleClick}  className="CardFront" style={CARDSTYLE}>
                <div className="cardCon">
                    <p>{backData.summary}</p>
                </div>         
            </div>
        );

    }

    render(){
        return(
            <ReactCardFlip isFlipped={this.props.data.isFlipped} flipDirection= "vertical">
                {this.renderFront(this.props.data)}
                {this.renderBack(this.props.data)}
            </ReactCardFlip>
        );
    }
}

export  default Destination;
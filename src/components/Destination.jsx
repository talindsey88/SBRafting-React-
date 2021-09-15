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
        this.myRef= React.createRef();
        this.state={
            isFlipped: props.data.isFlipped,
            data: props.data
        };
        this.handleClick=this.handleClick.bind(this);
        this.renderFront=this.renderFront.bind(this);
        this.renderBack=this.renderBack.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(!prevProps.data.isFlipped && this.props.data.isFlipped){
            console.log("flipped =", this.props.data.isFlipped);
            this.setState({
                isFlipped: this.props.data.isFlipped,
                data: this.props.data
            });
            window.scrollTo(0,this.myRef.current);
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
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection= "vertical" ref={this.myRef}>
                {this.renderFront(this.state.data)}
                {this.renderBack(this.state.data)}
            </ReactCardFlip>
        );
    }
}

export  default Destination;
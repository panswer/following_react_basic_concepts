import { Component } from "react";

// import BoilingVerdict from "../function/BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calculator extends Component{
    render(){
        return (
            <div>
                <TemperatureInput scale='c' />
                <TemperatureInput scale='f' />
            </div>
        );
    }
}

export default Calculator;
import { Component } from "react";

// import BoilingVerdict from "../function/BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

function toCelsius(fahrenheit) {
    return (fahrenheit -32) * 5 /9;
}

function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

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
import { Component } from "react";

const scaleNames={
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends Component{
    constructor(props){
        super(props);

        this.state={
            temperature:''
        };

        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            temperature:e.target.value
        });
    }

    render(){
        const temperature=this.state.temperature;
        const scale=this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input 
                    type="number"
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        );
    }
}

export default TemperatureInput;
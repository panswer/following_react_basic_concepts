import { Component } from "react";

class Reservation extends Component{
    constructor(props){
        super(props);
        this.state={
            isGoing:true,
            numberOfGuest:2
        }

        this.handleInputChange=this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target=event.target;
        const value=target.type==='checkbox'?target.checked:target.value;

        const name=target.name;

        this.setState({
            [name]:value
        });
    }

    render(){
        return (
            <form>
                <label>
                    Is going:
                    <input 
                        type="checkbox" 
                        name="isGoing" 
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Number of guests:
                    <input
                        type="number"
                        name="numberOfGuest"
                        value={this.state.numberOfGuest}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        );
    }
}

export default Reservation;
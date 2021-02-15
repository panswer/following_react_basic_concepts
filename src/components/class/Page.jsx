import { Component } from "react";

import WarningBanner from "../function/WarningBanner";

class Page extends Component{
    constructor(props){
        super(props);

        this.state={
            showWarning:true
        };

        this.handleToggleClick=this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(state=>({
            showWarning:!state.showWarning
        }));
    }

    render(){
        return(
            <div className="">
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning?'Hide':'Show'}
                </button>
            </div>
        );
    }
}

export default Page;
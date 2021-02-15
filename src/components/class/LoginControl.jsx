import { Component } from "react";

function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}

function Greeting(props={
    isLoggedIn:false
}) {
    const isLoggedIn=props.isLoggedIn;

    if(isLoggedIn){
        return <UserGreeting />;
    }else{
        return <GuestGreeting />;
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginControl extends Component{
    constructor(props){
        super(props);

        this.state={
            isLoggedIn:false
        };

        this.handleLoginClick=this.handleLoginClick.bind(this);
        this.handleLogoutClick=this.handleLogoutClick.bind(this);
    }
    
    handleLoginClick(){
        this.setState({
            isLoggedIn:true
        });
    }
    handleLogoutClick(){
        this.setState({
            isLoggedIn:false
        });
    }

    render(){
        const isLoggedIn=this.state.isLoggedIn;
        
        return (
            <div className="">
                <div className="">
                    The user is <b>{isLoggedIn?'currently':'not'}</b> logged in.
                </div>
                <Greeting isLoggedIn={isLoggedIn} />
                {
                    isLoggedIn
                        ? <LogoutButton onClick={this.handleLogoutClick}/>
                        : <LoginButton onClick={this.handleLoginClick}/>
                }
            </div>
        );
    }
}

export default LoginControl;
import ReactDOM from 'react-dom';
import React from "react";
import reportWebVitals from './reportWebVitals';

// import Welcome from './components/function/Welcome';

/* function Clock(props={
  date:new Date()
}) {
  return (
    );
  } */

class Clock extends React.Component{
  constructor(props){
    super(props);

    this.state={
      date:new Date()
    };
  }

  // Cuando se monte el componente
  componentDidMount(){
    this.timerId=setInterval(
      ()=>this.tick(),
      1000
    );
  }

  // Cuando se desmonte el componente
  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  tick(){
    this.setState({
      date:new Date()
    });
  }

  render(){
    return (
      <div className="">
        <h1>Hello, world!</h1>
        <h2>It's {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
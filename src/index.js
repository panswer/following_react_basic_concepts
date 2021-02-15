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
  render(){
    return (
      <div className="">
        <h1>Hello, world!</h1>
        <h2>It's {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick,1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
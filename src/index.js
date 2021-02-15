import ReactDOM from 'react-dom';
import React from "react";
import reportWebVitals from './reportWebVitals';

// import Page from "./components/class/Page";

function NumberList(props={
  numbers:[]
}) {
  const numbers = props.numbers
  const listItems=numbers.map(number=>(
    <li key={number.toString()}>
      {number}
    </li>
  ));

  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers=[1,2,3,4,5];

ReactDOM.render(
  <NumberList numbers={numbers}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
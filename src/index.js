import ReactDOM from 'react-dom';
import React from "react";
import reportWebVitals from './reportWebVitals';

import EssayForm from "./components/class/EssayForm";

ReactDOM.render(
  <EssayForm />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import ReactDOM from 'react-dom';
import React from "react";
import reportWebVitals from './reportWebVitals';

import LoginControl from "./components/class/LoginControl";

function App() {
  return (
    <div>
      <LoginControl />
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
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

function tick() {
  const element=(
    <div>
      <h1>Hello, world!</h1>
      <h2>It's {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  ReactDOM.render(element,document.getElementById('root'));
}

setInterval(tick,1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

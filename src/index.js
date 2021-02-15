import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

function formatName(user={
  firstName:'',
  lastName:''
}) {
  return user.firstName+' '+user.lastName;
}

const user={
  firstName:'Harper',
  lastName:'Perez'
};

ReactDOM.render(
  <h1>Hello, {formatName(user)}</h1>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

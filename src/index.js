import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// import Welcome from './components/function/Welcome';
import Comment from './components/function/Comment';

function App() {
  return (
    <div>
      <Comment 
        author={({
          name:'Ricardo Mejias'
        })} 
        text='Hello, world!'
        date={new Date()}
      />
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
import ReactDOM from 'react-dom';
import React from "react";
import reportWebVitals from './reportWebVitals';

function Post(props) {
  return (
    <li key={props.id}>
      {props.title}
    </li>
  );
}

function Blog(props={
  posts:[]
}) {
  const sidebar=(
    <ul>
      {
        props.posts.map(post=>(
          <Post 
            key={post.id}
            id={post.id}
            title={post.title}
          />
        ))
      }
    </ul>
  );

  const content = props.posts.map(post=>(
    <div key={post.id}>
      <h3>
        {post.title}
      </h3>
      <p>
        {post.content}
      </p>
    </div>
  ));

  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <Blog posts={posts}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
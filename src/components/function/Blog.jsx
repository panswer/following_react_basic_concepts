import React from "react";

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

  export default Blog;
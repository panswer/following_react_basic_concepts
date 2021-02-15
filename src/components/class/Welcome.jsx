import React from 'react';

function Welcome(props={
    name:''
}) {
    return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
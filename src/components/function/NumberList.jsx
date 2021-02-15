import React from "react";

function ListItem(props={
    value:Number
}) {
    return <li>
        {props.value}
    </li>
}

function NumberList(props={
    numbers:[]
}) {
    const numbers = props.numbers;
    const listItems=numbers.map(number=>(
        <ListItem 
            key={number.toString()} 
            value={number} 
        />
    ));
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default NumberList;
import React from 'react';

import { imageJPG } from "../../img/ImagesBase64.json";

function formatDate(date=new Date()) {
    return date.toLocaleDateString()
}

function Avatar(props={
    user:{
        avatarUrl:'',
        name:''
    }
}) {
    return (
        <img 
            src={props.user.avatarUrl||imageJPG} 
            alt={props.user.name} 
            className="Avatar"
        />
    );
}

function UserInfo(props={
    user:{
        avatarUrl:'',
        name:''
    }
}) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props={
    author:{
        name:'',
        avatarUrl:''
    },
    text:'',
    date:new Date()
}) {
    
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;
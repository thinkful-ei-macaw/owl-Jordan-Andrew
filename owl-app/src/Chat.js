import React from 'react';
import './React.css';

function Chat(props) {
    if(props.type === 'message') {
        return (
            <li className="message">
                <h2>{props.participants.name}</h2>
                <img src={props.participants.avatar} alt="user avatar"/>
                
            </li>
        )
    }

}

export default Chat;
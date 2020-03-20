import React from 'react';
import './Participant.css';

function Patricipant(props) {

    return (
        <ul>
            {
                props.participants.sort((a, b) => b.inSession - a.inSession )
                                  .map(participant => (
                    <li>
                        <img src={participant.avatar} alt="user avatar"/>
                        <h2>{participant.name}</h2>
                        
                        <p>{participant.onStage ? "on stage" : "off stage"}</p>
                        
                    </li>
                ))
            }
        </ul>
    )
}

export default Patricipant;
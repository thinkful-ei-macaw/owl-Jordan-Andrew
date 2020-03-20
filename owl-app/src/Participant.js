import React from 'react';
import './Participant.css';

function Patricipant(props) {

    return (
        <div className="participant">
            <ul>
                {
                    props.participants.sort((a, b) => b.inSession - a.inSession )
                                    .map(participant => (
                        <li key={participant.id}>
                            <img src={participant.avatar} alt="user avatar"/>
                            <h2>{participant.name}</h2>
                            
                            <p>{participant.onStage ? "on stage" : "off stage"}</p>
                            
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Patricipant;
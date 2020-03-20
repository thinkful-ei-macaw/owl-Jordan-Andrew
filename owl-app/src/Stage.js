import React from 'react';
import './Stage.css';

function Stage(props) {
    const stage = props.participants.filter( live => live.onStage === true );
    
    return (
        <div className="stage">
            {stage.map(participant => (
                <section key={participant.id} className="participant">
                    <h2>{participant.name}</h2>
                    <p>Volume</p>
                    <img src={participant.avatar} alt="user avatar"/>
                </section>
            ))}
        </div>

    )
}

export default Stage;
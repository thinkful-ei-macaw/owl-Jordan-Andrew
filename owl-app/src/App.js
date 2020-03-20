import React from 'react';
import Participant from './Participant'
import Stage from './Stage'
import Chat from './Chat'


function App(props) {
  return (
    <main className='App'>
      <Participant participants={props.store.participants}/>
      <Stage participants={props.store.participants}/>
      <Chat chat={props.store.chatEvents}/>
    </main>
  );
}

export default App;
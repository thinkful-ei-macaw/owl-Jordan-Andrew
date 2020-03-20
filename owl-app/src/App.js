import React from 'react';
import Participant from './Participant'
import Stage from './Stage'


function App(props) {
  return (
    <main className='App'>
      <Participant participants={props.store.participants}/>
      <Stage participants={props.store.participants}/>
    </main>
  );
}

export default App;
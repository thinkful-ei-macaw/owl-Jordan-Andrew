import React from 'react';
import Participant from './Participant'


function App(props) {
  return (
    <main className='App'>
      <Participant participants={props.store.participants}/>
    </main>
  );
}

export default App;
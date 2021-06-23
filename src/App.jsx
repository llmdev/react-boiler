import React from 'react';

const App = () => {
  const [state, setState] = React.useState(1);
  
  return (
    <>
    <button onClick={() => setState( old => old + 1)}>+</button>
    <h1>Hello my boiler!{state}</h1>
  </>
  )
}

export default App;
import './App.css';
import { useState } from 'react';
import { PinInput } from './components';


function App() {
  const [code, setCode] = useState('')
  return (
    <div className="App">
      <h1>Pin Input example</h1>
      <PinInput
        defaultValue='12'
        isSecretMode={true}
        // pattern="[1-6]"
        onSubmit={(value) => {
          setCode(value)
        }} />
      <h2>Code: {code}</h2>
    </div>
  );
}

export default App;

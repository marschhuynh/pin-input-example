import './App.css';
import { useState } from 'react';
import { PinInput } from './components';

const DemoComponent = ({
  isSecretMode = false,
  codeLength = 4,
  charPattern = '.',
  title = 'Pin Input example'
}) => {
  const [code, setCode] = useState('')
  return (
    <div className="App">
      <h1>{title}</h1>
      <PinInput
        codeLength={codeLength}
        defaultValue='12'
        isSecretMode={isSecretMode}
        pattern={charPattern}
        onSubmit={(value) => {
          setCode(value)
        }} />
      <h2>Code: {code}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <DemoComponent title='Pin Input example - default' />
      <DemoComponent title='Pin Input example - secret mode' isSecretMode />
      <DemoComponent title='Pin Input example - code length' codeLength={6} />
      <DemoComponent title='Pin Input example - only 1 to 6' charPattern='[1-6]' />
    </div>
  );
}

export default App;

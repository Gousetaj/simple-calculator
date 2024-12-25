import React, { useState } from 'react';
import Display from './components/Display';
import ButtonGrid from './components/ButtonGrid';
import './App.css';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      // Use eval cautiously - consider safer alternatives for real applications
      const result = eval(input); 
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <Display input={input} />
      <ButtonGrid onButtonClick={handleButtonClick} onClear={handleClear} onCalculate={handleCalculate} />
    </div>
  );
};

export default App;

import React from 'react';
import Button from './Button';

interface ButtonGridProps {
  onButtonClick: (value: string) => void;
  onClear: () => void;
  onCalculate: () => void;
}

const ButtonGrid: React.FC<ButtonGridProps> = ({ onButtonClick, onClear, onCalculate }) => {
  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

  return (
    <div className="buttons">
      {buttons.map((char) => (
        <Button
          key={char}
          label={char}
          onClick={() => (char === '=' ? onCalculate() : onButtonClick(char))}
          className={char === '=' ? 'equal' : ''}
        />
      ))}
      <Button label="C" onClick={onClear} className="clear" />
    </div>
  );
};

export default ButtonGrid;

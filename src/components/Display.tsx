import React from 'react';

interface DisplayProps {
  input: string;
}

const Display: React.FC<DisplayProps> = ({ input }) => {
  return <div className="display"><div className="display-input">{input || '0'}</div></div>;
};

export default Display;

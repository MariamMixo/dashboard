import React from 'react';

type StockProps = {
  volume: number;
};

const Stock: React.FC<StockProps> = ({ volume }) => {
  return (
    <div>
      <p> Volume: {volume}</p>
    </div>
  );
};

export default Stock;

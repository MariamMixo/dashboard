import React from 'react';

type FinanceProps = {
  count: number;
};
const Finance: React.FC<FinanceProps> = ({ count }) => {
  return <div>{count}</div>;
};

export default Finance;

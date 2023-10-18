import React from 'react';

type Worker = {
  id: number;
  name: string;
  salary: number;
};

type WorkersProps = {
  workers: Worker[];
};

const Workers: React.FC<WorkersProps> = ({ workers }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {workers.map((worker) => (
          <li key={worker.id}>
            <h1>Name:</h1> {worker.name}
            <h1>Salary:</h1> ${worker.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workers;

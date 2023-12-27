import React from 'react';
import styled from 'styled-components';

interface SelectorMachineProps {
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectorMachineComponent: React.FC<SelectorMachineProps> = ({ onSelectChange }) => {
  return (
    <div>
      <label htmlFor="deviceSelector">Selector de Máquina:</label>
      <select id="deviceSelector" onChange={onSelectChange}>
        <option value="device1">Device 1</option>
        <option value="device2">Device 2</option>
      </select>
    </div>
  );
};

const SelectorMachine = styled(SelectorMachineComponent)`
  width: 180px;
  height: 27px;
  font-size: 20px;
  margin: 5px 20px;
`;

export default SelectorMachine;

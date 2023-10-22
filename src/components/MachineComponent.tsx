import React from 'react';
import styled from 'styled-components';
import { NavbarComponent } from './NavbarComponent';

export const MachineComponent: React.FC = () => {
  const items = [
    { id: 1, item: 'Info' },
    { id: 2, item: 'Info' },
    { id: 3, item: 'Info' },
  ];

  return (
    <SectionMachine>
      <SectionInfo>
        <TitleMachine>Machines</TitleMachine>
      </SectionInfo>
      <NavbarComponent />
      {items.map((_item, id) => (
        <SectionMachineInfo key={id}>
          <MachineItem>
            <MachineImage>fff</MachineImage>
          </MachineItem>
          <MachineDescription>
            <InfoOne>1</InfoOne>
            <InfoTwo>2</InfoTwo>
            <InfoThree>3</InfoThree>
            <InfoFour>4</InfoFour>
          </MachineDescription>
        </SectionMachineInfo>
      ))}
    </SectionMachine>
  );
};

export default MachineComponent;

const SectionMachine = styled.section`
  width: 100%;
  background-color: #ebebeb;
  height: 2000px;
  padding: 3% 3% 0 23.3%;
  overflow: hidden;
`;

const SectionInfo = styled.section`
  display: flex;
`;
const TitleMachine = styled.h3`
  background-color: #d9d9d9;
  padding: 7px;
  width: 487px;
  height: 46px;
  color: #000;
  border-radius: 10px;
`;
const SectionMachineInfo = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #d9d9d9;
  width: 718px;
  height: 400px;
  border-radius: 10px;
  gap: 50px;
  margin-top: 50px;
`;
const MachineImage = styled.div`
  width: 195px;
  height: 306px;
  border-radius: 10px;
  margin: 50px 50px;
  background-color: #8d8d8d;
`;

const MachineDescription = styled.div`
  width: 385px;
  height: 306px;
  margin: 50px;
  border-radius: 10px;
  background-color: #d9d9d9;
`;
const MachineItem = styled.div`
  width: 195px;
  height: 200px;
`;

const InfoOne = styled.div`
  width: 385px;
  height: 50px;
  background-color: #8d8d8d;
  border-radius: 10px;
`;

const InfoTwo = styled.div`
  width: 192px;
  height: 50px;
  background-color: #8d8d8d;
  border-radius: 10px;
  margin-top: 20px;
`;
const InfoThree = styled.div`
  width: 192px;
  height: 50px;
  background-color: #8d8d8d;
  border-radius: 10px;
  margin-top: 20px;
`;
const InfoFour = styled.div`
  width: 192px;
  height: 50px;
  background-color: #8d8d8d;
  border-radius: 10px;
  margin: 60px 194px 8px;
`;

/*

const MachineComponent: React.FC = () => {
  return (
    <MachineContainer>
      <SectionInfo>
        <TitleMachine>Machines</TitleMachine>
      </SectionInfo>
      <NavbarComponent />
      <MachineGrid>
        {items.map((_item, id) => (
          <MachineItem key={id}>
            <MachineImage>fff</MachineImage>
            <MachineDescription>
              <InfoBox>1</InfoBox>
              <InfoBox>2</InfoBox>
              <InfoBox>3</InfoBox>
              <InfoBox>4</InfoBox>
            </MachineDescription>
          </MachineItem>
        ))}
      </MachineGrid>
    </MachineContainer>
  );
};

export default MachineComponent;

const MachineContainer = styled.section`
  width: 100%;
  background-color: #ebebeb;
  height: 2000px;
  padding: 3% 3% 0 23.3%;
  overflow: hidden;
`;

const SectionInfo = styled.section`
  display: flex;
`;

const TitleMachine = styled.h3`
  background-color: #d9d9d9;
  padding: 7px;
  width: 487px;
  height: 46px;
  color: #000;
  border-radius: 10px;
`;

const MachineGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 50px;
  margin-top: 50px;
`;

const MachineItem = styled.div`
  display: flex;
  background-color: #d9d9d9;
  border-radius: 10px;
  gap: 50px;
`;

const MachineImage = styled.div`
  width: 195px;
  height: 306px;
  border-radius: 10px;
  background-color: #8d8d8d;
  margin: 50px 50px;
`;

const MachineDescription = styled.div`
  width: 385px;
  height: 306px;
  margin: 30px 70px 30px 20px;
  border-radius: 10px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: #8d8d8d;
  border-radius: 10px;
  margin-top: 20px;
`;*/

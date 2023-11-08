import React from 'react';
import styled from 'styled-components';
import {NavbarComponent } from '../components/NavbarComponent';
import { PanelComponent } from '../components/PanelComponent';

 
export const HomeLayout: React.FC = () => {
  return (
    <SectionContainer>
      <NavbarComponent />
      <PanelComponent/>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;

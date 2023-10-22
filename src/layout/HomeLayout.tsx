import React from 'react';
import styled from 'styled-components';
import { NavbarComponent } from '../components/NavbarComponent';
import { ContentComponent } from '../components/ContentComponent';

export const HomeLayout: React.FC = () => {
  return (
    <SectionContainer>
      <NavbarComponent />
      <ContentComponent />
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;

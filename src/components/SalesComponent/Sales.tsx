import React from 'react';
import { SectionWrapper, SalesWrapper } from './styles';

interface SalesLayoutProps {
  height: '100%' | '40%';
}

export const Sales: React.FC<SalesLayoutProps> = ({ height }) => {
  return (
    <SectionWrapper style={{ height }}>
      <SalesWrapper></SalesWrapper>
    </SectionWrapper>
  );
};/*import { SectionWrapper,  SalesWrapper } from "./styles"

export const Sales = () => {

  return (
    <SectionWrapper>
      <SalesWrapper></SalesWrapper>
    </SectionWrapper>
  )
}

*/

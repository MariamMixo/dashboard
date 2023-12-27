import { MaintenianceLayout } from '../../layout/mainteniance/MaintenianceLayout.tsx';
import {
  SectionWrapper,
  MaintenianceTitle,
  ContentWrapper,
  ContentLeft,
  ContentLeftTitle,
  ContentRight,
  ContentRightTitle,
} from './styles.ts';



interface MaintenianceProps {
  height: string | number;
  toggleMenu: boolean;
}
export const Mainteniance: React.FC<MaintenianceProps> = ({ height, toggleMenu }) => {
  return (
    <SectionWrapper style={{ height }}>
      <MaintenianceTitle>Mantenimiento</MaintenianceTitle>
      <ContentWrapper>
        <ContentLeft>
          <ContentLeftTitle></ContentLeftTitle>
          <MaintenianceLayout toggleMenu={toggleMenu} />
        </ContentLeft>
        <ContentRight>
          <ContentRightTitle>Alertas</ContentRightTitle>
        </ContentRight>
      </ContentWrapper>
    </SectionWrapper>
  )
}   
    
/*export const Mainteniance = () => {
  const toggleMenu = true;
  return (
    <SectionWrapper>
      <MaintenianceTitle>Mantenimiento</MaintenianceTitle>
      <ContentWrapper>
        <ContentLeft>
          <ContentLeftTitle></ContentLeftTitle>
          <MaintenianceLayout toggleMenu={toggleMenu} />
        </ContentLeft>
        <ContentRight>
          <ContentRightTitle>Alertas</ContentRightTitle>
        </ContentRight>
      </ContentWrapper>
    </SectionWrapper>
  );
};*/
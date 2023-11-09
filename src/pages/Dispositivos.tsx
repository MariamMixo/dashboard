import styled from 'styled-components';
import { useState } from 'react';

import message from '../assets/icons/message.png';
import close from '../assets/icons/close.png';
import sort from '../assets/icons/sort.png';
import { NavbarComponent } from '../components/NavbarComponent';

export const Dispositivos = () => {
  const [isDiscriptionVisible, setDiscriptionVisible] = useState(true);

  const handleIconClick = () => {
    setDiscriptionVisible(false);
  };
  const items = [
    { id: 1, item: 'MIXO-T01', location: 'Barcelona' },
    { id: 2, item: 'MIXO-T02', location: 'Barcelona' },
  ];
  return (
    <SectionDevice>
      <NavbarComponent />
      <TitleDevice>Dispositivos</TitleDevice>
      {isDiscriptionVisible && (
        <Description>
          <DescriptionText>
            <InfoIcon>
              <img src={message} alt="" />
              <span>Informacion</span>
            </InfoIcon>
            <p>Bienvenido a tu Mixo Dashboard!<br></br>
            Esta es la pantalla del Panel de Control donde encontrará acceso Componentes del
            salpicadero como facturación, alertas o stock.<br></br>
            En el menú lateral puede encontrar la página con los detalles de cada compon.</p>
            <IconClose onClick={handleIconClick}>
              <img src={close} alt="" />
            </IconClose>
          </DescriptionText>
        </Description>
      )}
      <SortSection>
        <p>Filtrar</p>
        <img src={sort} alt="" />
      </SortSection>
        {items.map((item) => (
          <DeviceSection key={item.id}>
            <p>{item.item}</p>
            <p>{item.location}</p>
          </DeviceSection>
        ))}
    </SectionDevice>
  );
};

const SectionDevice = styled.section`
  width: 100%;
  background-color: #ffffff;
  height: 100%;
  padding: 0 2% 0 19%;
  overflow: hidden;
`;
const TitleDevice = styled.div`
  width: 266px;
  height: 46px;
  font-size: 38px;
  width: fit-content;
  color: #000;
  margin: 10px 20px 0 0;
  margin-bottom: 0;
  align-self: flex-start;
  margin-right: auto;
`;
const Description = styled.div`
  width: 671px;
  height: 135px;
  background-color: #c3def6;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  margin: 10px 0 20px 0;
`;
const DescriptionText = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  text-align: left;
  padding: 10px;
  line-height: 1.5;
`;
const InfoIcon = styled.div`
display: flex;
align-items: center;

img {
  width: 24px;
  height: 24px; 
  margin-right: 8px; 
}
span {
  font-size: 16px;
}
}
`;
const IconClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  img {
    width: 14.92px;
    height: 15.27px;
  }
`;
const SortSection = styled.section`
width: 180px;
height: 27px;
background-color: #eaeaea;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
border-radius: 5px; 
padding: 0 5px;

p{
  font-size: 12px; 
}
img{
  weight: 15px;
  height: 15px:
}
`;

const DeviceSection = styled.section`
  width: 1370px;
  height: 422px;
  background-color: #f4f4f4;
  border-radius: 10px;
  margin: 20px 0;
`;


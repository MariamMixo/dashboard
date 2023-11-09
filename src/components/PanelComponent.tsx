import styled from 'styled-components';
import { useState } from 'react';

import alerta from '../assets/png/alertas.png';
import message from '../assets/icons/message.png';
import close from '../assets/icons/close.png';

const getColor = (cantidad: number) => {
  if (cantidad < 100) {
    return '#FF5F7B';
  } else if (cantidad < 200) {
    return '#FFA800';
  } else {
    return '#00FF66';
  }
};
export const PanelComponent = () => {
  const [isDiscriptionVisible, setDiscriptionVisible] = useState(true);

  const handleIconClick = () => {
    setDiscriptionVisible(false);
  };

  interface ListItemData {
    id: number;
    item: string;
    status: string;
    cantidad: number;
  }

  const data = [
    { id: 1, item: 'Combinados', price: '2.484.000€', color: 'rgba(255, 122, 0, 0.2)' },
    { id: 2, item: 'Refrescos', price: '1.266.000€', color: 'rgba(82, 0, 255, 0.2)' },
    { id: 3, item: 'Agua', price: '643.000€', color: 'rgba(0, 133, 255, 0.2)' },
  ];

  const List: ListItemData[] = [
    { id: 1, item: 'Presion de agua', status: 'Ok', cantidad: 0 },
    { id: 2, item: 'Temperatura', status: '37ºc', cantidad: 0 },
    { id: 3, item: 'Vasos', status: '237', cantidad: 237 },
    { id: 4, item: 'Conexion', status: '178Mbs', cantidad: 0 },
    { id: 5, item: 'Hielo', status: '2kg', cantidad: 0 },
    { id: 6, item: 'TPV Conexion', status: 'OK', cantidad: 0 },
    { id: 4, item: 'Conexion', status: '178Mbs', cantidad: 0 },
    { id: 5, item: 'Hielo', status: '2kg', cantidad: 0 },
    { id: 6, item: 'TPV Conexion', status: 'OK', cantidad: 0 },
  ];

  return (
    <SectionContent>
      <TitlePanel>Control Panel</TitlePanel>
      {isDiscriptionVisible && (
        <DescriptionPanel>
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
        </DescriptionPanel>
      )}
      <SectionPanel>
        <BillingInfo>
          <BillingWrapper>
            <BillingTitle>Facturación</BillingTitle>
            <CalendarContainer>Calendario</CalendarContainer>
          </BillingWrapper>
          <Billings>
            <Combined key={data[0].id} color={data[0].color}>
              <p>{data[0].item}</p>
              <p>{data[0].price}</p>
            </Combined>
            <Refreshments key={data[1].id} color={data[1].color}>
              <p>{data[1].item}</p>
              <p>{data[1].price}</p>
            </Refreshments>
            <Water key={data[2].id} color={data[2].color}>
              <p>{data[2].item}</p>
              <p>{data[2].price}</p>
            </Water>
          </Billings>
        </BillingInfo>
        <MaintenianceInfo>
          <TitleWrapper>
            <MaintenianceTitle>Mantenimiento</MaintenianceTitle>
            <SelectorMachine>Selector de Máquina</SelectorMachine>
          </TitleWrapper>
          <ListItemAndAlertsWrapper>
            <ListItemWrapper>
              {List.map((item, index) => (
                <ListItem key={index} cantidad={item.cantidad}>
                  <p>{item.status}</p>
                  <p>{item.item}</p>
                </ListItem>
              ))}
            </ListItemWrapper>
            <Alerts>
              <AlertTitle>Alertas</AlertTitle>
              <AlertImage src={alerta} alt="Alerta" />
              <AlertText>No hay alertas</AlertText>
            </Alerts>
          </ListItemAndAlertsWrapper>
        </MaintenianceInfo>
      </SectionPanel>
    </SectionContent>
  );
};

const SectionContent = styled.section`
  width: 100%;
  background-color: #ffffff;
  height: 100%;
  padding: 0 2% 0 19%;
  overflow: hidden;
`;
const TitlePanel = styled.h1`
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
const DescriptionPanel = styled.div`
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
  line-height: 1.5;
`;
const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.5; 

  img {
    width: 20px;
    height: 20.06px; 
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
const SectionPanel = styled.section`
  display: flex;
  gap: 30px;
`;

const BillingInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 377px;
  height: 723px;
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 0 20px 0 20px;
`;
const BillingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px 150px 0 0;
`;
const BillingTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  font-weight: 400;
`;
const CalendarContainer = styled.div`
  margin: 30px 0 30px 0;
`;

const Billings = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin: 30px 0;
`;
const Combined = styled.div`
  width: 316px;
  height: 156px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-size: 20px;
    position: relative;
    bottom: 20px;
  }

  p:nth-child(2) {
    font-size: 36px;
    position: relative;
    top: 20px;
  }
`;
const Refreshments = styled.div`
  width: 316px;
  height: 156px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-size: 20px;
    position: relative;
    bottom: 20px;
  }

  p:nth-child(2) {
    font-size: 36px;
    position: relative;
    top: 20px;
  }
`;
const Water = styled.div`
  width: 316px;
  height: 156px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-size: 20px;
    position: relative;
    bottom: 20px;
  }

  p:nth-child(2) {
    font-size: 36px;
    position: relative;
    top: 20px;
  }
`;

const MaintenianceInfo = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 981px;
  height: 723px;
  background-color: #f4f4f4;
  border-radius: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ListItemAndAlertsWrapper = styled.div`
  display: flex;
`;
const ListItemWrapper = styled.div`
  width: 458px;
  height: 584px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  background-color: #eaeaea;
  border-radius: 10px;
  margin: 20px;
`;

const ListItem = styled.div<{ cantidad: number }>`
  /*problema: 178Mbs, font-size*/
  width: 126px;
  height: 154px;
  background-color: rgba(0, 71, 255, 0.2);
  border-radius: 10px;
  margin: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => getColor(props.cantidad)};
    position: absolute;
    top: 0;
    left: 0;
    margin: 5px;
  }
  p {
    
  }

  p.status {
    font-size: 40px;
    top: 10px;
  }

  p.item {
    font-size: 14px;
    bottom: 30px;
  }
`;
const Alerts = styled.div`
  width: 442px;
  height: 584px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 442px;
  height: 584px;
  background-color: #eaeaea;
  border-radius: 10px;
  margin: 20px;
`;
const AlertImage = styled.img`
  width: 100px;
  height: auto;
`;

const AlertText = styled.p`
  color: white;
  font-size: ;
`;
const AlertTitle = styled.div`
font-family: 'Montserrat', sans-serif;
font-size: 24px; 
position: absolute;
top: 0;
left: 0;
margin: 10px;

`;
const MaintenianceTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  margin: 5px 20px;
`;

const SelectorMachine = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  margin: 5px 20px;
`;

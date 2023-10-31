import styled from 'styled-components';
export const PanelComponent = () => {
  const data = [
    { id: 1, item: 'Combinados', price: '2.484.000$' },
    { id: 2, item: 'Refrescos', price: '1.266.000$' },
    { id: 3, item: 'Agua', price: '643.000$' },
  ];
  const List = [
    { id: 1, item: 'Presion de agua', status: 'Ok' },
    { id: 2, item: 'Temperatura', status: '37C' },
    { id: 3, item: 'Vasos', price: '237' },
    { id: 4, item: 'Conexion', status: '178Mbs' },
    { id: 5, item: 'Hielo', status: '2kg' },
    { id: 6, item: 'TPV Conexion', status: 'OK' },
  ];
  return (
    <SectionContent>
      <TitlePanel>Control Panel</TitlePanel>
      <DescriptionPanel>
        <h3>
          Bienvenido a tu Mixo Dashboard!
          <br>
            Esta es la pantalla del Panel de Control donde encontrará acceso Componentes del
            salpicadero como facturación, alertas o stock. En el menú lateral puede encontrar la
            página con los detalles de cada compon
          </br>
        </h3>
      </DescriptionPanel>
      <SectionPanel>
        <BillingInfo>
          <Calendar></Calendar>
          {data.map((item, index) => {
            return (
              <ListItem key={index}>
                <h5>{item.item}</h5>
                <p>{item.price}</p>
              </ListItem>
            );
          })}
        </BillingInfo>
        <MaintenianceInfo>
          {List.map((item, index) => {
            return (
              <ListItem key={index}>
                <h5>{item.item}</h5>
                <p>{item.status}</p>
              </ListItem>
            );
          })}
        </MaintenianceInfo>
        <Alerts>Alertas</Alerts>
      </SectionPanel>
    </SectionContent>
  );
};

const SectionContent = styled.section`
  width: 100%;
  background-color: #ebebeb;
  height: 2000px;
  padding: 3% 3% 0 23.3%;
  overflow: hidden;
`;
const TitlePanel = styled.h1`
  font-size: 50px;
  width: fit-content;
  color: #000;
  margin: 5px;
`;
const DescriptionPanel = styled.h3`
  width: 671px;
  height: 135px;
  background-color: #c3def6;
  border-radius: 10px;
`;
const SectionPanel = styled.section`
  display: flex;
`;

const BillingInfo = styled.div``;
const Calendar = styled.div``;
const ListItem = styled.div``;
const MaintenianceInfo = styled.div`
 width: 961px;
 height: 723px; 
 background-color: #EAEAEA;
`;
const Alerts = styled.div``;

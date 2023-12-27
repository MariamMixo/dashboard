import selector from "../../assets/icons/selector.png"

import styled from 'styled-components';

interface ListItemData {
  id: number;
  item: string;
  status: string;
  cantidad: number;
}
const getColor = (cantidad: number) => {
  if (cantidad < 100) {
    return '#FF5F7B';
  } else if (cantidad < 200) {
    return '#FFA800';
  } else {
    return '#00FF66';
  }
};

const List: ListItemData[] = [
  { id: 1, item: 'Presion de agua', status: 'Ok', cantidad: 0 },
  { id: 2, item: 'Temperatura', status: '37ºc', cantidad: 137 },
  { id: 3, item: 'Vasos', status: '237', cantidad: 237 },
  { id: 4, item: 'Conexion', status: '178Mbs', cantidad: 0 },
  { id: 5, item: 'Hielo', status: '2kg', cantidad: 220 },
  { id: 6, item: 'TPV Conexion', status: 'OK', cantidad: 0 },
  { id: 4, item: 'Conexion', status: '178Mbs', cantidad: 0 },
  { id: 5, item: 'Hielo', status: '2kg', cantidad: 0 },
  { id: 6, item: 'TPV Conexion', status: 'OK', cantidad: 0 },
];
interface MaintenianceLayoutProps {
  toggleMenu: boolean;
}
export interface ListItemProps{
  cantidad:number;
  toggle:boolean;
}
export const MaintenianceLayout: React.FC<MaintenianceLayoutProps> = ({ toggleMenu }) => {
  return (
    <MaintenianceInfo>
      <SelecorMachine>
        <img src={selector} alt="" />
      </SelecorMachine>
      <ListItemWrapper toggle={!!toggleMenu}>
        {List.map((item: ListItemData, index: number) => (
          <ListItem key={index} cantidad={item.cantidad} toggle={!!toggleMenu}>
            <p>{item.status}</p>
            <p>{item.item}</p>
          </ListItem>
        ))}
      </ListItemWrapper>
    </MaintenianceInfo>
  );
};


const MaintenianceInfo = styled.div`

`;
const SelecorMachine = styled.div`
  width: 180px;
  height: 27px;
`; 
const ListItemWrapper = styled.div<{ toggle: boolean }>`
  width: 458px;
  height: 584px;
  padding: 10px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //margin: -22px 52px 0px 0px;
  margin: -22px 0px 0px 30px;
  transition: all 0.5s ease-in-out;
  @media screen and (min-width: 1920px) {
    width: ${(props) => props.toggle === true ? '458px' : '572' }; 
    margin: ${(props) => props.toggle === true ? '-22px 0px 0px 30px' : '-22px 52px 0px 0px' }; 
    //width: ${(props) => props.toggle === true ? '458px' : '572px' }; 
  }
`;

const ListItem = styled.div<ListItemProps>`
  height: 154px;
  background-color: rgba(0, 71, 255, 0.2);
  border-radius: 10px;
  margin: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  @media screen and (min-width: 1920px) {
    width: ${(props) => (props.toggle ? '157.34px' : '126px')};
    
  }
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
    font-size: 14px;
    bottom: 30px;
    text-align: center;
  }

  .status {
    font-size: 40px;
    top: 10px;
  }

  .item {
    font-size: 14px;
    bottom: 30px;
  }
 
`;














/*import selector from "../../assets/icons/selector.png"

import styled from 'styled-components';

interface MaintenianceLayoutProps {
  toggleMenu: boolean;
}
interface ListItemProps {
  cantidad: number;
  toggle: boolean;
  item: ListItemData; 
}
interface ListItemData {
  id: number;
  item: string;
  status: string;
  cantidad: number;
}

const getColor = (cantidad: number) => {
  if (cantidad < 100) {
    return '#FF5F7B';
  } else if (cantidad < 200) {
    return '#FFA800';
  } else {
    return '#00FF66';
  }
};
const getColor = (cantidad: number, item: string) => {
  if (item.toLowerCase() === 'temperatura') {
    if (cantidad >= 40) {
      return '#FF5F7B';
    } else if (cantidad >= 30) {
      return '#FFA800';
    } else {
      return '#00FF66';
    }
  } else {
    if (cantidad < 100) {
      return '#FF5F7B';
    } else if (cantidad < 200) {
      return '#FFA800';
    } else {
      return '#00FF66';
    }
  }
};
const getColor = (item: ListItemData) => {
  if (item.item === 'Hielo') {
    if (item.cantidad < 1) {
      return '#FF5F7B';
    } else if (item.cantidad >= 1 && item.cantidad < 2) {
      return '#FFA800';
    } else {
      return '#00FF66';
    }
  } else if (item.item === 'Temperatura') {
    if (item.cantidad > 40) {
      return '#FF5F7B';
    } else if (item.cantidad > 30 && item.cantidad <= 40) {
      return '#FFA800';
    } else {
      return '#00FF66';
    }
  } else {
    if (item.cantidad < 100) {
      return '#FF5F7B';
    } else if (item.cantidad < 200) {
      return '#FFA800';
    } else {
      return '#00FF66';
    }
  }
};

const List: ListItemData[] = [
  { id: 1, item: 'Presion de agua', status: 'Ok', cantidad: 0 },
  { id: 2, item: 'Temperatura', status: '37ºc', cantidad: 35},
  { id: 3, item: 'Vasos', status: '237', cantidad: 237 },
  { id: 4, item: 'Conexion', status: '178Mbs', cantidad: 0 },
  { id: 5, item: 'Hielo', status: '2kg', cantidad: 0.5},
  { id: 6, item: 'TPV Conexion', status: 'OK', cantidad: 0 },
  { id: 4, item: 'Conexion', status: '178Mbs', cantidad: 0 },
  { id: 5, item: 'Hielo', status: '2kg', cantidad: 0 },
  { id: 6, item: 'TPV Conexion', status: 'OK', cantidad: 0 },
];

export const MaintenianceLayout: React.FC<MaintenianceLayoutProps> = ({ toggleMenu }) => {
  return (
    <MaintenianceInfo>
      <SelecorMachine>
        <img src={selector} alt="" />
      </SelecorMachine>
      <ListItemWrapper toggle={!!toggleMenu}>
        {List.map((item: ListItemData, index: number) => (
          <ListItem key={index} cantidad={item.cantidad} item={item} toggle={!!toggleMenu}>
            <p style={{ color: getColor(item) }}>{item.status}</p>
            <p>{item.item}</p>
          </ListItem>
        ))}
      </ListItemWrapper>
    </MaintenianceInfo>
  );
};


const MaintenianceInfo = styled.div`

`;
const SelecorMachine = styled.div`
  width: 180px;
  height: 27px;
`; 
const ListItemWrapper = styled.div<{ toggle: boolean }>`
  width: 458px;
  height: 584px;
  padding: 10px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //margin: -22px 52px 0px 0px;
  margin: -22px 0px 0px 30px;
  transition: all 0.5s ease-in-out;
  @media screen and (min-width: 1920px) {
    width: ${(props) => props.toggle === true ? '458px' : '572' }; 
    margin: ${(props) => props.toggle === true ? '-22px 0px 0px 30px' : '-22px 52px 0px 0px' }; 
    //width: ${(props) => props.toggle === true ? '458px' : '572px' }; 
  }
`;

const ListItem = styled.div<ListItemProps & { item: ListItemData }>`
  height: 154px;
  background-color: rgba(0, 71, 255, 0.2);
  border-radius: 10px;
  margin: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  @media screen and (min-width: 1920px) {
    width: ${(props) => (props.toggle ? '157.34px' : '126px')};
    
  }
  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => getColor(props.item)};
    position: absolute;
    top: 0;
    left: 0;
    margin: 5px;
    
  }

  p {
    font-size: 14px;
    bottom: 30px;
    text-align: center;
    color: black;
  }

  .status {
    font-size: 40px;
    top: 10px;
  }

  .item {
    font-size: 14px;
    bottom: 30px;
  }
 
`;
*/









/*export const MaintenianceLayout = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <MaintenianceInfo>
      <SelecorMachine onClick={handleToggleClick}>
        <img src={selector} alt="" />
      </SelecorMachine>
      <ListItemWrapper toggle={toggle}>
        {List.map((item, index)  => (
          <ListItem key={index} cantidad={item.cantidad} >
            <p>{item.status}</p>
            <p>{item.item}</p>
          </ListItem>
        ))}
      </ListItemWrapper>
    </MaintenianceInfo>
  );
};*/









/*export const MaintenianceLayout = () => {
  return (
    <MaintenianceInfo>
            <SelecorMachine>
              <img src={selector} alt=""/>
            </SelecorMachine>
            
              {List.map((item, index) => (
                <ListItem key={index} cantidad={item.cantidad}>
                  <p>{item.status}</p>
                  <p>{item.item}</p>
                </ListItem>
              ))}
            !!!!!Estilo del atributo {
width: 157.34px;
height: 154px;
}
            
          
        </MaintenianceInfo>
  )
}*/
/**<Alerts>
              <AlertTitle>Alertas</AlertTitle>
              <AlertImage src={stock} alt="Alerta" />
              <AlertText>No hay alertas</AlertText>
            </Alerts> */
           
            /*const TitleWrapper = styled.div`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            
            
            
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
              border: 1px solid red;
              border-radius: 1px;
            `;*/
            


















/*const Alerts = styled.div`
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
*/
/*const SelectorMachine = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  margin: 5px 20px;
`;

/*export const MaintenianceLayout = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <MaintenianceInfo>
      <SelecorMachine onClick={handleToggleClick}>
        <img src={selector} alt="" />
      </SelecorMachine>
      <ListItemWrapper toggle={toggle}>
        {List.map((item, index)  => (
          <ListItem key={index} cantidad={item.cantidad} >
            <p>{item.status}</p>
            <p>{item.item}</p>
          </ListItem>
        ))}
      </ListItemWrapper>
    </MaintenianceInfo>
  );
};*/




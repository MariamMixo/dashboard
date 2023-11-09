import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
import panel from '../assets/icons/panel.png';
import dipositivos from '../assets/icons/dispositivos1.png';
import stock from '../assets/icons/settings.png';
import ajustes from '../assets/icons/ajustes.png';
import billing from "../assets/icons/billings.png";
import other from "../assets/icons/tool.png"

interface SectionLogoProps {
  colorStart?: string;
  colorEnd?: string;
}

export const NavbarComponent = () => {
  const menu = [
    { name: 'Panel', img: panel },
    { name: 'Dispositivos', img: dipositivos },
    { name: 'Facturación', img: billing },
    { name: 'Stock', img: stock },
    { name: 'Otros', img: other },
    { name: 'Ajustes', img: ajustes },
  ];
  return (
    <SectionNavbar>
      <SectionLogo colorStart="#BD9CFF" colorEnd="#FFAF63">
        <LogoImage src={logo} alt="" />
      </SectionLogo>
      <NavbarContainer>
      <MenuList>
        {menu.map((item, index) => (
          <Link to={`/${item.name.toLowerCase()}`} key={index} style={{ textDecoration: 'none' }}>
            <MenuItem style={{ color: '#000' }}>
              <IconImage src={item.img} alt="" />
              <ItemName>{item.name}</ItemName>
            </MenuItem>
          </Link>
        ))}
      </MenuList>
      </NavbarContainer>
    </SectionNavbar>
  );
};

const SectionNavbar = styled.section`
font-family: 'Montserrat', sans-serif;
  width: 17%; 
  height: 95%;
  background-color: #f4f4f4;
  position: fixed;
  top: 0;
  left: 0;
  margin: 10px;
  border-radius: 15px; 
`;


const SectionLogo = styled.section<SectionLogoProps>`
  height: 5%;
  border-radius: 10px;
  display: flex; 
  align-items: center; 
  background: linear-gradient(
    to right,
    ${(props) => props.colorStart || '#BD9CFF'},
    ${(props) => props.colorEnd || '#FFAF63'}
  );
`;

const LogoImage = styled.img`
  width: 66px;
  height: 24px;
  margin-left: 30px;
`;

const NavbarContainer = styled.div`
  border-radius: 20px;
  height: 95%;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;


const MenuList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #FFFFFF;
    border-radius: 10px;
  }
`;

const IconImage = styled.img`
  width: 30px;
  height: 30px;
`;

const ItemName = styled.div`
  margin: 0;
  font-size: 16px;
`;

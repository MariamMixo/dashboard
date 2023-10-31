
import styled from "styled-components";

import logo from "../assets/logo/logo.png";
import panel from "../assets/icons/panel.png";
import dipositivos from "../assets/icons/dispositivos.png";
import stock from "../assets/icons/stock.png";
import ajustes from "../assets/icons/ajustes.png"

export const NavbarComponent = () => {
    const menu = [
        { name: 'Panel', img: panel },
        { name: 'Dispositivos', img: dipositivos },
        { name: 'Stock', img: stock },
        { name: 'Ajustes', img: ajustes  },
      ];
    return (
        <SectionNavbar>
          <NavbarContainer>
            <LogoImage src={logo} alt="" />
    
            <MenuList>
              {menu.map((item, index) => {
                return (
                  <MenuItem key={index} style={{ color: '#000' }}>
                    <IconImage src={item.img} alt="" />
                    <ItemName>{item.name}</ItemName>
                  </MenuItem>
                );
              })}
            </MenuList>
          </NavbarContainer>
        </SectionNavbar>
      );
}

const SectionNavbar = styled.section`
  width: 20%;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
`;

const NavbarContainer = styled.div`
  margin: 30px;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const LogoImage = styled.img`
  width: 110px;
  height: 40px;
`;

const MenuList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;

const ItemName = styled.h3`
  margin: 0;
`;


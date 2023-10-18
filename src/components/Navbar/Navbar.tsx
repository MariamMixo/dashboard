import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
type NavbarProps = {
  items: string[];
};

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <MenuContainer>
      {items &&
        items.map((item, index) => (
          <StyledLink key={index} to={`/${item}`}>
            {item}
          </StyledLink>
        ))}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  left: 0;
  top: 0;
  width: 363px;
  height: 1101px;
  background-color: #333;
  padding: 10px;
  padding-top: 40px;
  color: #fff;
`;

const StyledLink = styled(Link)`
  margin: 0 10px;
  padding-top: 30px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;

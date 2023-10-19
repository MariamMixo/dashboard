import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logo/logo.png'
import machine from '../assets/icons/machine.png'
import finance from '../assets/icons/finance.png'
import maintenance from '../assets/icons/maintenance.png'

export const NavbarComponent: React.FC = () => {

  const menu = [
    { name: 'Machines', img: machine },
    { name: 'Finance', img: finance },
    { name: 'Maintenance', img: maintenance }
  ]

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
            )
          })}
        </MenuList>
      </NavbarContainer>
    </SectionNavbar>
  )
}

const SectionNavbar = styled.section`
  width: 20%;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
`

const NavbarContainer = styled.div`
  margin: 30px;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

const LogoImage = styled.img`
  width: 110px;
  height: 40px;
`

const MenuList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`

const IconImage = styled.img`
  width: 20px;
  height: 20px;
`

const ItemName = styled.h3`
  margin: 0;
`